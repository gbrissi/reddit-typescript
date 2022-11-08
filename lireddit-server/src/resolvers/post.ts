import { Post } from "../entities/Post";
import { Resolver, Query, Arg, Mutation, InputType, Field, Ctx, UseMiddleware, Int, FieldResolver, Root } from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { conn } from "../index";

@InputType()
class PostInput {
    @Field()
    title: string
    @Field()
    text: string
}

@Resolver(Post)
export class PostResolver {
    
    @FieldResolver(() => String)
    textSnippet(
        @Root() root: Post
    ) {
        return root.text.slice(0, 50)
    }
    
    @Query(() => [Post])
    async posts(  
        @Arg('limit', () => Int) limit: number,
        @Arg('cursor', () => String, { nullable: true }) cursor: string | null 
    ): Promise<Post[]> {
        const realLimit = Math.min(50, limit);
        const qb = conn
            .getRepository(Post)
            .createQueryBuilder("post")
            .orderBy('"createdAt"', "DESC")
            .take(realLimit)

        if(cursor) {
            qb.where('"createdAt" < :cursor', {cursor: new Date(parseInt(cursor))})
        }

        return qb.getMany();
    }

    @Query(() => Post, {nullable: true})
    post(@Arg('id') id:number): Promise<Post | null> {
        return Post.findOne({where: {id}})
    }

    @Mutation(() => Post, {nullable: true})
    @UseMiddleware(isAuth)
    async createPost(
        @Arg('input') input: PostInput, 
        @Ctx() {req}: MyContext
        ): Promise<Post | null> {
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