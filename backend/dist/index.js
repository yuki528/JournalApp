"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./utils/db");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const journalRoutes_1 = __importDefault(require("./routes/journalRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/journals', journalRoutes_1.default);
const startServer = async () => {
    try {
        await (0, db_1.connectDB)();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (error) {
        console.error('Failed to connect to the database', error);
        process.exit(1);
    }
};
startServer();
