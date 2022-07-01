import bcrypt from 'bcrypt';

import { userService } from './index.js'

import { loginSchema, signupSchema } from '../models/schemas.js';

export const validateLogin = function (body) {
    const mutableBody = { ...body };
    const validation = loginSchema.validate(mutableBody);

    if (validation.error) {
        return false;
    }

    return validation.value;
};

export const validateUser = async (credential) => {
    const { email, password } = credential;

    const user = await userService.getUserByEmail(email);
    if (!user) {
        return false;
    }

    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (isCorrectPassword) {
        return user._id;
    }

    return false;
};

export const validateSignup = function (body) {
    const mutableBody = { ...body };
    const validation = signupSchema.validate(mutableBody);

    if (validation.error) {
        return false;
    }

    return validation.value;
};