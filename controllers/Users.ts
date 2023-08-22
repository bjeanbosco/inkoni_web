// controllers/users.ts

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import Joi from '@hapi/joi';
import { createUser, getUsers, updateUser, deleteUser } from '../models/UserModel';

const saltRounds = 10;

const createUserSchema = Joi.object({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const updateUserSchema = Joi.object({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  email: Joi.string().email().required(),
});

export async function createUserController(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { fname, lname, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await getUsers().find((user: { email: any; }) => user.email === email);
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await createUser({
        fname, lname, email, password: hashedPassword,
        id: 0
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
}

export async function getUsersController(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
}

export async function updateUserController(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const { error } = updateUserSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { fname, lname, email } = req.body;

    // Check if the user exists
    const existingUser = await getUsers().find((user: { id: number; }) => user.id === Number(id));
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await updateUser({
        id: Number(id), fname, lname, email,
        password: ''
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user' });
  }
}

export async function deleteUserController(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    // Check if the user exists
    const existingUser = await getUsers().find((user: { id: number; }) => user.id === Number(id));
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = await deleteUser(Number(id));

    res.status(200).json(deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
}
