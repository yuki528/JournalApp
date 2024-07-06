"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const authService_1 = require("../services/authService");
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await (0, authService_1.registerUser)({ username, password });
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await (0, authService_1.loginUser)({ username, password });
        res.status(200).json({ token });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ error: error.message });
        }
        else {
            res.status(401).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.login = login;
