import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getRepository, FindOneOptions } from 'typeorm';
import { User } from '../models/User';

interface RegisterData {
  username: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  const userRepository = getRepository(User);
  const existingUser = await userRepository.findOne({ where: { username: data.username } } as FindOneOptions<User>);

  if (existingUser) {
    throw new Error('User already exists');
  } 

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = userRepository.create({ username: data.username, password: hashedPassword });
  await userRepository.save(user);

  return user;
};

export const loginUser = async (data: LoginData) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { username: data.username } } as FindOneOptions<User>);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

  return token;
};
