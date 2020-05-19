import Dispense from "../models/dispense.model";
import config from "../config/config";

// exports.checkCode = function (req, res) {
//     console.log(req.query.code)
//     Code.check(req.query.code, function (err, isExist) {
//         if (err) res.send(err);
//         else {
//             console.log(isExist);
//             const token = jwt.sign({
//                 isExist: isExist
//             }, config.jwtSecret);
//             res.json({token});
//         }
//     })
// };

exports.update = function(req, res) {
    console.log(req.query)
    console.log(req.body)
    Dispense.update(req.body, function(err, result) { 
        if (err) res.send(err);
        else {
            console.log("response>>>>>>>>>>>", result);
            res.json({result: result});
        }
    })
}

exports.getByDeviceId = function(req, res) {
    console.log(req.query);
    Dispense.getByDeviceId(req.query.deviceId, (err, result) => {
        if (err) res.send(err);
        else {
            console.log(result);
            res.json({result: result});
        }
    })
}