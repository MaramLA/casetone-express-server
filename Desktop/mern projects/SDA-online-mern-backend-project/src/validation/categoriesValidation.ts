import { check } from 'express-validator'

export const categoryValidation = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name must not be empty')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 charachters')
    .isLength({ max: 150 })
    .withMessage('Name must be less than 150 chaacters'),
]
