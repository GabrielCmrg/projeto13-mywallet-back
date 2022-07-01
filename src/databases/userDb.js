import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';

import { db } from './index.js';

dotenv.config();
const users = process.env.USERS_COLLECTION;
const sessions = process.env.SESSIONS_COLLECTION;

export const getUserByEmail = async function (email) {
    const user = db.collection(users).findOne({ email });
    
    return user;
};

export const getSessionToken = async function (id) {
    const userId = new ObjectId(id);
    const session = await db.collection(sessions).findOne({ userId });
    return session?.token;
};

export const createSession = async function (userId, token) {
    await db.collection(sessions).insertOne({ userId, token });
};