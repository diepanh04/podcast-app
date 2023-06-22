import express from 'express';
import prismaClient from '../prisma/prismaClient.js';
import authenticate from '../middleware/authenticate.js';
import firebase from '../services/firebase.js';

const router = express.Router();

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const newUser = await firebase.auth.createUser({
      email,
      password,
    });

    if (newUser) {
      await prismaClient.user.create({
        data: {
          email,
          name,
          id: newUser.uid,
        }
      });
    }

    return res.status(200).json({ success: "Account created successfully. Please sign in." });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Add your sign-in logic here
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
