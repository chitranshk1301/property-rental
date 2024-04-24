import { Request, Response } from 'express';
import {admin} from '../firebase';

// Get user data
export const getUserData = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const userDoc = await admin.firestore().collection('users').doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userData = userDoc.data();
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Update user data
export const updateUserData = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { cart, favorites } = req.body;

  try {
    const userDocRef = admin.firestore().collection('users').doc(userId);

    await userDocRef.update({
      cart,
      favorites,
    });

    return res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};