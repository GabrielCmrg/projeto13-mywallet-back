import { userService } from "../services/index.js";

export const signin = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const token = userService.retrieveToken(userId);
        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};