const authCtrl = {};
const User = require('../models/userModel');
const Joi = require('joi');
const HttpStatues = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/db');

authCtrl.createUser = async (req, res) => {
    const schema = Joi.object().keys({
        username: Joi.string()
            .min(5)
            .max(10)
            .required(),
        password: Joi.string()
            .regex(/^[a-zA-Z0-9]/)
            .required()
            .min(5)
    });
    const { error, value } = Joi.validate(req.body, schema);

    if (error && error.details) {
        return res.status(HttpStatues.BAD_REQUEST).json({ msg: error.details });
    }
    const userName = await User.findOne({
        username: value.username
    });
    if (userName) {
        return res
            .status(HttpStatues.CONFLICT)
            .json({ message: 'User Name already exist' });
    }

    return bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(value.password, salt, (err, hash) => {
            if (err) {
                return res
                    .status(HttpStatues.BAD_REQUEST)
                    .json({ message: 'Error Hasin Password' });
            }
            const body = {
                username: value.username,
                password: hash
            };
            User.create(body)
                .then(user => {
                    const token = jwt.sign({ user }, dbConfig.secret, {
                        expiresIn: '10h'
                    });
                    res.cookie('auth', token);
                    return res
                        .status(HttpStatues.CREATED)
                        .json({ message: 'User Create Successfully', user, token });
                })
                .catch(err => {
                    return res
                        .status(HttpStatues.INTERNAL_SERVER_ERROR)
                        .json({ message: 'Error in created ' });
                });
        });
    });
};

authCtrl.loginUser = async (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res
            .status(HttpStatues.INTERNAL_SERVER_ERROR)
            .json({ message: 'No empty fields allowed' });
    }
    await User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res
                    .status(HttpStatues.NOT_FOUND)
                    .json({ message: 'User Name Not found' });
            }
            return bcrypt.compare(req.body.password, user.password).then(result => {
                if (!result) {
                    return res
                        .status(HttpStatues.INTERNAL_SERVER_ERROR)
                        .json({ message: 'Password is not correct' });
                }
                const token = jwt.sign({ user }, dbConfig.secret, {
                    expiresIn: '10h'
                });
                res.cookie('auth', token);
                return res
                    .status(HttpStatues.OK)
                    .json({ message: ' Login Success', user, token });
            });
        })
        .catch(err => {
            return res
                .status(HttpStatues.INTERNAL_SERVER_ERROR)
                .json({ message: 'Error occured', err });
        });
};

module.exports = authCtrl;
