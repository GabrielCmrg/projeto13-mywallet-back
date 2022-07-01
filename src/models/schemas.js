import joi from 'joi';

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    checkPassword: joi.ref(password),
});

export { loginSchema, signupSchema };