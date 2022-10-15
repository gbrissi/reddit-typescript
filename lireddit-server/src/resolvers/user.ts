import { MyContext } from "../types";
import { Resolver, Mutation, Arg, Field, Ctx, ObjectType, Query } from "type-graphql";
import { User } from "../entities/User";
import argon2 from 'argon2'
import { COOKIE_NAME } from "../constants";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { validateRegister } from "../utils/validateRegister";

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
    @Mutation(() => Boolean)
    async forgotPassword(
    //@Arg('email') email: string,
    //@Ctx() {em}: MyContext
    ) {
        //const user = await em.findOne(User, {email});
        return true
    }

    @Query(() => User, {nullable: true})
    async me(
        @Ctx() {req, em}: MyContext
    ) {
        // You are not logged in!
        if(!req.session.userId) {
            return null
        }
        const user = await em.findOne(User, {id: req.session.userId})
        return user
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg("options") options: UsernamePasswordInput,
        @Ctx() {em, req}: MyContext
    ) : Promise<UserResponse> {
        const errors = validateRegister(options)
        if(errors) {
            return {errors}
        }
        const hashedPassword = await argon2.hash(options.password)
        const user = em.create(User, {
            username: options.username,
            password: hashedPassword,
            email: options.email
        })
        try {
            await em.persistAndFlush(user)
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
        @Ctx() {em, req}: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, usernameOrEmail.includes('@') 
            ? {email: usernameOrEmail} : {username: usernameOrEmail}
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