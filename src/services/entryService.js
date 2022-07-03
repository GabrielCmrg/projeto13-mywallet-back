import { userDb } from "../databases/index.js";

export const addEntryToUser = async function (entry, userId) {
    const created = await userDb.createUserEntry(userId, entry);

    return created;
};

export const getAllUserEntries = async function (userId) {
    const user = await userDb.getUserById(userId);
    if (!user) {
        return false;
    }

    return user.entries;
};