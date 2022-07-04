import { userDb } from "../databases/index.js";

export const addEntryToUser = async function (entry, userId) {
    const created = await userDb.createUserEntry(userId, entry);

    return created;
};