import { Post } from "../entities/Post";
import { Resolver, Query, Arg, Mutation, InputType, Field, Ctx } from "type-graphql";
import { MyContext } from "src/types";

@InputType()
class PostInput {
    @Field()
    title: string
    @Field()
    text: string
}


@Resolver()
export class PostResolver {
    @Query(() => [Post])
    async posts(    
    ): Promise<Post[]> {
        return Post.find()
    }

    @Query(() => Post, {nullable: true})
    post(@Arg('id') id:number): Promise<Post | null> {
        return Post.findOne({where: {id}})
    }

    @Mutation(() => Post, {nullable: true})
    async createPost(
        @Arg('input') input: PostInput, 
        @Ctx() {req}: MyContext
        ): Promise<Post | null> {
        if (!req.session.userId) {
            throw new Error('not authenticated')
        }

        return Post.create({
            ...input,
            creatorId: req.session.userId
        }).save();
    }

    @Mutation(() => Post, {nullable: true})
    async updatePost(
        @Arg('id') id:number, 
        @Arg('title', () => String, {nullable: true}) title:string, 
        ): Promise<Post | null> {
        const post = await Post.findOne({where: {id}});
        if (!post) {
            return null
        }
        if (typeof title !== 'undefined') {
            await Post.update({id}, {title})
        }
        return post
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg('id') id: number, 
        ): Promise<boolean> {
        const post = await Post.findOne({where: {id}})
        if(!post) {
            return false
        } else {
            await Post.delete(id)
            return true;
        }
    }
}