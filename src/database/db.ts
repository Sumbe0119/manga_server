import { DataSource } from "typeorm";

export const db = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'sumbe@!123',
    database: 'test',
    entities: [__dirname + '/entities/*'],
    synchronize: false,
});
// export const db = new DataSource({
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     entities: [__dirname + '/entities/*'],
//     synchronize: true,
//     logging: false
// });


