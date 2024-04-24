import express from 'express';
import { login, signup, googleAuth } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/google-auth', googleAuth);

export default router;