import {body} from "express-validator";

export const StudentRules = [
    body('name').notEmpty().withMessage('name is required'),
    body('age').isInt().notEmpty().withMessage('age is required'),
    body('email').notEmpty().withMessage('email is required'),
    body('email').isEmail().withMessage('Must be an email')
]