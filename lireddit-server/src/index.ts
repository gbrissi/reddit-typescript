import "reflect-metadata";
import {MikroORM} from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import session from "express-session";
import connectRedis from 'connect-redis';
import Redis from "ioredis";
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import cors from 'cors'
import {DataSource} from 'typeorm'
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { MyContext } from "./types";

export const conn = new DataSource({
    type: 'postgres',
    database: 'lireddit2',
    username: 'postgres',
    password: 'admin',
    logging: true,
    synchronize: true,
    entities: [Post, User]
})

const main = async() => {
    conn.initialize()

    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true
    }

    const app = express();
    app.use(cors(corsOptions))

    const RedisStore = connectRedis(session)
    const redis = new Redis()
    //redis.connect().catch(console.error)

    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({ 
                client: redis,
                disableTouch: true
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: 'lax', //csrf
                secure: __prod__ //cookie only works in https
            },
            saveUninitialized: false,
            secret: "adgfasdfgasgspdkoaspkodasadg",
            resave: false,
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PostResolver, UserResolver],
            validate: false,
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground({
                settings: {
                    "request.credentials": "include"
                }
            })
        ],
        context: ({ req, res }): MyContext => ({ req, res, redis })
    });

    await apolloServer.start()
    apolloServer.applyMiddleware({app, cors: false})

    app.listen(4000, () => {
        console.log("\nServer started at port 4000!")
    })
}

main().catch((err) => {
    console.error(err)
});