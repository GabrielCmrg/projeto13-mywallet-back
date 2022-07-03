import { entryService } from '../services/index.js';

export const processEntry = async (req, res) => {
    const entry = res.locals.entry;
    const userId = res.locals.userId;
    try {
        const success = await entryService.addEntryToUser(entry, userId);
        if (success) {
            return res.sendStatus(201);
        }

        return res.sendStatus(404);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};