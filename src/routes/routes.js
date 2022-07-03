import express from 'express';

import { userMiddlewares } from '../middlewares/index.js';
import { userController } from '../controllers/index.js';

import { entriesMiddlewares } from '../middlewares/index.js';
import { entryController } from '../controllers/index.js';

const router = express.Router();

// sign-up routes
router.post('/sign-up', userMiddlewares.validateSignup, userController.signup);

// login routes
router.post('/login', userMiddlewares.validateLogin, userController.signin);

// entries routes
router.post('/entries', entriesMiddlewares.validateEntry, entryController.processEntry);
router.get('/entries', entriesMiddlewares.validateHeader, entryController.getUserEntries);

export default router;