import { Router } from 'express';
const router = Router();

import { signUp, signInWithPassword, getByUser } from '../controllers/AuthController.js';
import authMiddleware from '../middleware/auth.js'

router.post('/signup', signUp);

router.post('/signinwithpassword', signInWithPassword);

// router.post('/recover', resetPasswordForEmail);

// router.post('/logout', signOut);

router.use(authMiddleware);

router.get('/user', getByUser);

export default router;
