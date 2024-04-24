import { Request, Response } from 'express';
import { admin } from '../firebase';
import bcrypt from 'bcryptjs';

// Signup
export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userRecord = await admin.auth().createUser({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().getUserByEmail(email);

    if (!userRecord) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, userRecord.passwordHash);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Google Authentication
export const googleAuth = async (req: Request, res: Response) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const userRecord = await admin.auth().getUser(uid);

    if (!userRecord) {
      // Create a new user record if the user doesn't exist
      const newUser = await admin.auth().createUser({
        uid,
        email: decodedToken.email,
      });

      return res.status(201).json({ message: 'User created successfully' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};