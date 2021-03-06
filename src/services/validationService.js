import bcrypt from 'bcrypt';

import { userService } from './index.js'

import { loginSchema, signupSchema, headerSchema, entrySchema } from '../models/schemas.js';

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

export const validateHeader = function (headers) {
    const mutableHeaders = { ...headers };
    const validation = headerSchema.validate(mutableHeaders);

    if (validation.error) {
        return false;
    }

    return validation.value;
};

export const validateEntry = function (body) {
    const mutableBody = { ...body };
    const validation = entrySchema.validate(mutableBody);

    if (validation.error) {
        return false;
    }

    return validation.value;
};

export const validateToken = async (token) => {
    const session = await userService.getSessionByToken(token);
    if (!session) {
        return false;
    }

    return session.userId;
};

export const isEmailInUse = async (email) => {
    const emailOwner = await userService.getUserByEmail(email);
    if (emailOwner) {
        return true;
    }

    return false;
};