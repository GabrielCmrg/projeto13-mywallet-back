import { entryService } from '../services/index.js';

export const processEntry = async (req, res) => {
    const entry = res.locals.entry;
    const userId = res.locals.userId;
    try {
        const success = await entryService.addEntryToUser(entry, userId);
        if (!success) {
            return res.sendStatus(404);
        }

        return res.sendStatus(201);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export const getUserEntries = async (req, res) => {
    const userId = res.locals.userId;
    try {
        const entries = await entryService.getAllUserEntries(userId);
        if (!entries) {
            return res.sendStatus(404);
        }

        return res.json(entries);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};