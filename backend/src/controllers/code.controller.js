import jwt from 'jsonwebtoken';
import Code from "../models/code.model";
import config from "../config/config";

exports.checkCode = function (req, res) {
    Code.check(req.query.code, function (err, response) {
        if (err) res.send(err);
        else {
            let isExist = false;
            if (response.length > 0) isExist = true;
            else isExist = false;
            const token = jwt.sign({
                isExist: isExist,
                isAdmin: response[0].isAdmin !== undefined ? response[0].isAdmin : 0
            }, config.jwtSecret);
            res.json({token});
        }
    })
};
