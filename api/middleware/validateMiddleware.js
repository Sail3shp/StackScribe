import AppError from "../utils/customError.js";
import { z } from 'zod';

export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error) {
        console.log(error.issues[0].message)
        if (error instanceof z.ZodError) {
            const formattedMessage = error.issues
                .map((err) => `${err.path.join('.')}: ${err.message}`)
                .join(' | ');

            return next(new AppError(400, formattedMessage));
        }

        next(error);
    }
};