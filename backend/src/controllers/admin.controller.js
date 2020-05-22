import Code from "../models/code.model";
import Dispense from '../models/dispense.model';
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

exports.getDashboard = function (req, res) {
    Dispense.getDashboard((err, result) => {
        if (err) res.send(err);
        else res.status(200).json(result);
    })
}

exports.getAllDispenses = function (req, res) {
    Dispense.getAllDispenses((err, result) => {
        if (err) res.send(err);
        else res.status(200).json(result);
    })
}

exports.getAllCodes = function (req, res) {
    Code.getAllCodes((err, result) => {
        if (err) res.send(err);
        else res.status(200).json(result);
    })
}

exports.createCode = function (req, res) {
    console.log(req.body)
    const new_Code = new Code(req.body);

    if (!new_Code.code) {
        res.status(400).send({error: true, message: 'Please provide code'});
    } else {
        Code.create(new_Code, function (err, code) {
            if (err) res.send(err);
            res.status(201).json(code)
        });
    }
    // Code.createCode(req.body, (err, result) => {
    //     if (err) res.send(err);
    //     else res.status(201).json(result);
    // })
}