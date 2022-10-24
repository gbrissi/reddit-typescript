import { MyContext } from "../types";
import { Resolver, Mutation, Arg, Field, Ctx, ObjectType, Query } from "type-graphql";
import { User } from "../entities/User";
import argon2 from 'argon2'
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { validateRegister } from "../utils/validateRegister";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from 'uuid'
import { conn } from "../index";
import { FindOptionsWhere } from "typeorm/find-options/FindOptionsWhere";
import { FindOperator } from "typeorm/find-options/FindOperator";
import { getConnection } from "typeorm";

@ObjectType() 
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[]

    @Field(() => User, {nullable: true})
    user?: User
}

@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async changePassword(
        @Arg('token') token: string,
        @Arg('newPassword') newPassword: string,
        @Ctx() {redis, req}: MyContext
    ): Promise<UserResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: 'newPassword',
                        message: 'length must be grater than 2'
                    }
                ]
            }
        }

        const key = FORGET_PASSWORD_PREFIX + token
        const userId = await redis.get(key)
        if (!userId) {
            return {
                errors: [
                    {
                        field: 'token',
                        message: 'token expired'
                    }
                ]
            }
        }

        const parsedUserId = parseInt(userId)
        const user = await User.findOne({where: {id: parsedUserId}})
    
        if (!user) {
            return {
                errors: [
                    {
                        field: 'token',
                        message: "user no longer exists"
                    }
                ]
            }
        }

        User.update(
            {id: parsedUserId}, 
            {password: await argon2.hash(newPassword)}
        )

        await redis.del(key)

        req.session.userId = user.id;

        return {user};
    }

    @Mutation(() => Boolean)
    async forgotPassword(
    @Arg('email') email: string,
    @Ctx() {redis}: MyContext
    ) {
        const user = await User.findOne({where: {email}});
        if(!user) {
            //the email is not in db
            return true;
        }

        const token = v4()

        await redis.set(
            FORGET_PASSWORD_PREFIX + token,
            user.id, 
            "EX", 
            1000 * 60 * 60 * 24 * 3
        )

        await sendEmail(
            email, 
            `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
        )

        return true
    }

    @Query(() => User, {nullable: true})
    me(
        @Ctx() {req}: MyContext
    ) {
        // You are not logged in!
        if(!req.session.userId) {
            return null
        }

        return User.findOne({where: {id: req.session.userId}})
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg("options") options: UsernamePasswordInput,
        @Ctx() {req}: MyContext
    ) : Promise<UserResponse> {
        const errors = validateRegister(options)
        if(errors) {
            return {errors}
        }
        const hashedPassword = await argon2.hash(options.password)
        let user;
        try {
            const result = await conn.createQueryBuilder().insert().into(User).values(
                {
                    username: options.username,
                    email: options.email,
                    password: hashedPassword
                }
            )
            .returning('*')
            .execute()
            user = result.raw
        } catch(error) {
            //duplicate username error
            if(error.detail.includes('already exists')) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "username has already been taken"
                        }
                    ]
                }
            }
            console.log('message: ', error.message)
        }

        //store user id session
        //this will set a cookie on the user
        //keep them logged in
        console.log(user)
        req.session.userId = user.id
        return {
            user
        };
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg("usernameOrEmail") usernameOrEmail: string,
        @Arg("password") password: string,
        @Ctx() {req}: MyContext
    ): Promise<UserResponse> {
        const user = await User.findOne(
            usernameOrEmail.includes("@")
            ? {where: {email: usernameOrEmail}} 
            : {where: {username: usernameOrEmail}}
        )
            
        if (!user) {
            return {
                errors: [{
                    field: 'usernameOrEmail',
                    message: "that username doesn't exists",
                }]
            }
        }

        const valid = await argon2.verify(user.password, password)
        if (!valid) {
            return {
                errors: [{
                    field: 'password',
                    message: 'that password is incorrect',
                }]
            }
        }

        req.session.userId = user.id;

        return {
            user
        };
    }

    @Mutation(() => Boolean)
    logout (
        @Ctx() {req, res}: MyContext
    ) {
        return new Promise((resolve) => 
            req.session.destroy((err) => {
                res.clearCookie(COOKIE_NAME)
                if(err) {
                    console.log(err)
                    resolve(false)
                    return
                }
                resolve(true)
            })
        )
    }
}