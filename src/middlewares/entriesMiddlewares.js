import { validationService } from '../services/index.js';

export const validateEntry = async (req, res, next) => {
    const { authorization } = validationService.validateHeader(req.headers);
    const entry = validationService.validateEntry(req.body);
    if (!entry || !authorization) {
        return res.sendStatus(422);
    }

    try {
        const token = authorization.replace('Bearer ', '');
        const userId = await validationService.validateToken(token);
        if (!userId) {
            return res.sendStatus(401);
        }
    
        res.locals.entry = entry;
        res.locals.userId = userId;
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
    next();
};