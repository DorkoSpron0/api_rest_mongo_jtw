import express from 'express'
import { login, register } from '../controllers/auth.controller.js'
import { body } from 'express-validator'
import { validationResultExpress } from '../middlewares/validationResultExpress.js'

const router = express.Router()

router.post('/login', [body('email', 'Email format incorrect')
    .trim()
    .isEmail()
    .normalizeEmail(),
    body('password', '6 characters min').trim().isLength({ min: 6 }),
],validationResultExpress, login)

router.post(
    '/register',
    [
        body('email', 'Email format incorrect')
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', '6 characters min').trim().isLength({ min: 6 }),
        body('password', 'Password incorrect')
            .custom((value, { req }) => {
                if (value !== req.body.repassword) {
                    throw new Error('Password not match')
                } return value
            })
    ],
    validationResultExpress,
    register)

export default router