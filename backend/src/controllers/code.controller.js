import jwt from 'jsonwebtoken';
import Code from "../models/code.model";
import config from "../config/config";

exports.checkCode = function (req, res) {
    Code.check(req.query.code, function (err, response) {
        if (err) res.send(err);
        else {
            let isExist = false;
            isExist = response.length > 0;
            if (isExist) {
                const token = jwt.sign({
                    isExist: isExist,
                    isAdmin: response[0].isAdmin !== undefined ? response[0].isAdmin : 0
                }, config.jwtSecret);
                res.json({token});
            } else {
                res.status(401).send({
                    message: 'Incorrect Username Or Password!'
                });
            }
        }
    })
};

exports.backup_password = function (req, res) {
    Code.backup(req.query.backup_password, function (err, response) {
        if (err) res.send(err);
        else {
            let isExist = false;
            isExist = response.length > 0;
            if (isExist) {
                const token = jwt.sign({
                    isExist: isExist,
                    isAdmin: response[0].isAdmin !== undefined ? response[0].isAdmin : 0
                }, config.jwtSecret);
                res.json({token});
            } else {
                res.status(401).send({
                    message: 'Incorrect Username Or Password!'
                });
            }
        }
    })
};
