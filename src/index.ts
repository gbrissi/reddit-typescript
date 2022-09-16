import "reflect-metadata";
import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import session from "express-session";
import connectRedis from 'connect-redis';
import { createClient } from "redis";


const main = async() => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
 
    const app = express();

    const RedisStore = connectRedis(session)
    const redisClient = createClient({ legacyMode: true })
    redisClient.connect().catch(console.error)

    app.use(
        session({
        name: 'qid',
        store: new RedisStore({ 
            client: redisClient,
            disableTouch: true
        }),
        saveUninitialized: false,
        secret: "adgfasdfgasgsadg",
        resave: false,
        })
    )

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em.fork({}) })
    });

    await apolloServer.start()
    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log("\nServer started at port 4000!")
    })
}

main().catch((err) => {
    console.error(err)
});