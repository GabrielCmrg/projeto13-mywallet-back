import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

import { userDb } from '../databases/index.js';

export const getUserByEmail = async function (email) {
    const user = await userDb.getUserByEmail(email);
    if (!user) {
        return false;
    }

    return user;
};

export const retrieveToken = async function (id) {
    const token = await userDb.getSessionToken(id);

    if (!token) {
        const newToken = uuid();
        await userDb.createSession(id, newToken);
        return newToken;
    }

    return token;
};

export const registerUser = async function (infos) {
    const { name, email, password } = infos;
    const passwordHash = bcrypt.hashSync(password, 10);
    const entries = {};
    const user = { name, email, password: passwordHash, entries };
    await userDb.createUser(user);
};