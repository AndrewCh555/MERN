import { body } from 'express-validator'

export const loginValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    ];

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('fullName', 'Add full name').isLength({ min: 3 }),
    body('avatarUrl').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Enter title').isLength({ min: 3}).isString(),
    body('text', 'Enter text').isLength({ min: 3}).isString(),
    body('tags','Enter tags').optional().isString(),
    body('imageUrl', 'Wrong url for img').optional().isString(),
];