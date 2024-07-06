"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.AppDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const User_1 = require("../models/User");
const JournalEntry_1 = require("../models/JournalEntry");
// DataSource instance for migration purposes
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User_1.User, JournalEntry_1.JournalEntry],
    synchronize: false, // Ensure this is false for migrations
    logging: false,
    migrations: ['src/migrations/**/*.ts'],
});
// createConnection for runtime connection
const connectDB = async () => {
    await (0, typeorm_1.createConnection)({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [User_1.User, JournalEntry_1.JournalEntry],
        synchronize: false, // Ensure synchronize is false for runtime connection
        logging: false,
    });
};
exports.connectDB = connectDB;
