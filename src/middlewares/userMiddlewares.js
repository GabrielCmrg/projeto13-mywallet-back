import { validationService } from '../services/index.js';

export const validateLogin = async (req, res, next) => {
    const credential = validationService.validateLogin(req.body);
    if (!credential) {
        return res.sendStatus(422);
    }

    const userId = await validationService.validateUser(credential);
    if (!userId) {
        return res.status(404).send('E-mail ou senha inválidos.');
    }

    res.locals.userId = userId;
    next();
};