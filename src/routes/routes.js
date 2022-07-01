import express from 'express';

import { userMiddlewares } from '../middlewares/index.js'

const router = express.Router();

// login routes
router.post('/login', userMiddlewares.validateLogin);

// sign-up routes


// entries routes


export default router;