import express from 'express';

import { userMiddlewares } from '../middlewares/index.js';
import { userController } from '../controllers/index.js';

const router = express.Router();

// login routes
router.post('/login', userMiddlewares.validateLogin, userController.signin);

// sign-up routes
router.post('/sign-up', userMiddlewares.validateSignup);


// entries routes


export default router;