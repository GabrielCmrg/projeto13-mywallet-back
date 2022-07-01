import { validationService } from '../services/index.js';

export const validateLogin = async (req, res, next) => {
    const credential = validationService.validateLogin(req.body);
    if (!credential) {
        return res.sendStatus(422);
    }

    try {
        const userId = await validationService.validateUser(credential);
        if (!userId) {
            return res.status(401).send('E-mail ou senha inválidos.');
        }
        
        res.locals.userId = userId;
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
    next();
};

export const validateSignup = (req, res, next) => {
    const signupInfos = validationService.validateSignup(req.body);
    if (!signupInfos) {
        return res.sendStatus(422);
    }

    res.locals.signupInfos = signupInfos;
    next();
};