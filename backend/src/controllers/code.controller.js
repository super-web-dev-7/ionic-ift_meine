import jwt from 'jsonwebtoken';
import Code from "../models/code.model";
import config from "../config/config";

exports.createCode = function (req, res) {
    const new_Code = new Code(req.body);

    if (!new_Code.code) {
        res.status(400).send({error: true, message: 'Please provide code'});
    } else {
        Code.create(new_Code, function (err, code) {
            if (err) res.send(err);
            res.json(code)
        });
    }
};

exports.checkCode = function (req, res) {
    console.log(req.query.code)
    Code.check(req.query.code, function (err, isExist) {
        if (err) res.send(err);
        else {
            console.log(isExist);
            const token = jwt.sign({
                isExist: isExist
            }, config.jwtSecret);
            res.json({token});
        }
    })
};
