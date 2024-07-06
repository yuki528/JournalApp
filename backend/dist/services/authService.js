"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const User_1 = require("../models/User");
const registerUser = async (data) => {
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const existingUser = await userRepository.findOne({ where: { username: data.username } });
    if (existingUser) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    const user = userRepository.create({ username: data.username, password: hashedPassword });
    await userRepository.save(user);
    return user;
};
exports.registerUser = registerUser;
const loginUser = async (data) => {
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const user = await userRepository.findOne({ where: { username: data.username } });
    if (!user) {
        throw new Error('Invalid username or password');
    }
    const isPasswordValid = await bcrypt_1.default.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid username or password');
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};
exports.loginUser = loginUser;
