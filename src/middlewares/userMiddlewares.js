import { validationService } from '../services/index.js';

export const validateLogin = async (req, res, next) => {
    const validation = validationService.validateLogin(req.body);
    if (!validation) {
        return res.sendStatus(422);
    }

    const userId = await validationService.checkUser(validation);
    if (!userId) {
        return res.status(404).send('E-mail ou senha inválidos.');
    }
    
    res.locals.userId = userId;
    next();
};