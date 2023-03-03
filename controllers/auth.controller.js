import {validationResult} from 'express-validator'

export const register = (req,res) => {

    console.log(req.body)
    res.json({msg: 'ok'})
}

export const login = (req,res) => {
    res.json({msg: 'ok'})
}