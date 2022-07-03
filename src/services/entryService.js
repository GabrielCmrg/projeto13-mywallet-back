import { userDb } from "../databases";

export const addEntryToUser = async function (entry, userId) {
    const created = await userDb.createUserEntry(userId, entry);

    return created;
};