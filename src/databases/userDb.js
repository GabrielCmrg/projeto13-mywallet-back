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

export const createSession = async function (session) {
    await db.collection(sessions).insertOne(session);
};

export const createUser = async function (user) {
    await db.collection(users).insertOne(user);
};

export const createUserEntry = async function (userId, entry) {
    const id = new ObjectId(userId);
    const { modifiedCount } = await db.collection(users).updateOne({ _id: id }, {
        $push: { entries: entry }
    });
    if (modifiedCount) {
        return true;
    }

    return false;
};