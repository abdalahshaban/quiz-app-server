const jwt = require('jsonwebtoken');
const HttpStatues = require('http-status-codes');
const dbConfig = require('../config/db');

module.exports = {
    VerifyToken: (req, res, next) => {
        if (!req.headers.authorization) {
            return res
                .status(HttpStatues.UNAUTHORIZED)
                .json({ message: 'No Authorization' });
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res
                .status(HttpStatues.FORBIDDEN)
                .json({ message: 'No token provided' });
        }

        return jwt.verify(token, dbConfig.secret, (err, decoded) => {
            if (err) {
                if (err.expiredAt < new Date()) {
                    return res.status(HttpStatues.INTERNAL_SERVER_ERROR).json({
                        message: 'Token was Expired. Pleas login again',
                        token: null
                    });
                }
                next();
            }
            req.user = decoded.user || decoded.data;
            next();
        });
    }
};
