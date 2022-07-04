import joi from 'joi';

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    checkPassword: joi.string().equal(joi.ref('password')),
});

const headerSchema = joi.object({
    authorization: joi
        .string()
        .pattern(/^Bearer [0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/)
        .required(),
}).unknown(true);

const entrySchema = joi.object({
    date: joi.string().pattern(/^([0-2][0-9]\/0[0-9]|3[0-1]\/1[0-2])$/).required(),
    description: joi.string().required(),
    amount: joi.number().greater(0).required(),
    type: joi.string().valid('debit', 'credit').required(),
});

export { loginSchema, signupSchema, headerSchema, entrySchema };