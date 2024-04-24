import express from 'express';
import { getUserData, updateUserData } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:userId', authMiddleware, getUserData);
router.put('/:userId', authMiddleware, updateUserData);

export default router;