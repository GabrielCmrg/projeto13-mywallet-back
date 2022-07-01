import dotenv from 'dotenv';

import { db } from './index.js';

dotenv.config();
const users = process.env.USERS_COLLECTION;

export const getUserByEmail = async function (email) {
    const user = db.collection(users).findOne({ email });
    
    return user;
};