import { Options } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const config: Options = {
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'admin',
    debug: !__prod__
}

export default config;