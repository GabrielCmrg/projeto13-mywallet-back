import { userService } from "../services/index.js";

export const signin = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const token = await userService.retrieveToken(userId);
        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export const signup = async (req, res) => {
    try {
        const signupInfos = res.locals.signupInfos;
        await userService.registerUser(signupInfos);
        return res.sendStatus(201);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export const getUser = async (req, res) => {
    const userId = res.locals.userId;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.sendStatus(404);
        }

        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};