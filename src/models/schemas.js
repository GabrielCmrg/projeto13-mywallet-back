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

const headerSchema = joi.object({
    authorization: joi
        .string()
        .pattern(/^Bearer [0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/g)
        .required(),
}).unknown(true);

export { loginSchema, signupSchema, headerSchema };