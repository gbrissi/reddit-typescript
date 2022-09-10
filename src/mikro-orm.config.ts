import { Options } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from 'path';

const config: Options = {
    migrations: {
        path: path.join(__dirname, './migrations'),
        glob: '!(*.d).{js,ts}'
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'admin',
    debug: !__prod__
}

export default config;