import { userDb } from '../databases/index.js';

export const getUserByEmail = async function (email) {
    const user = await userDb.getUserByEmail(email);
    if (!user) {
        return false;
    }

    return user;
};