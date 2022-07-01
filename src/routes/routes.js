import express from 'express';

import { userMiddlewares } from '../middlewares/index.js';
import { userController } from '../controllers/index.js';

const router = express.Router();

// login routes
router.post('/login', userMiddlewares.validateLogin, userController.signin);

// sign-up routes


// entries routes


export default router;