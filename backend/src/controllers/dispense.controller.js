import cron from 'node-cron';
import Dispense from "../models/dispense.model";

exports.update = function(req, res) {
    Dispense.update(req.body, function(err, result) { 
        if (err) res.send(err);
        else {
            res.json({result: result});
        }
    })
}

exports.getByDeviceId = function(req, res) {
    Dispense.getByDeviceId(req.query.deviceId, (err, result) => {
        if (err) res.send(err);
        else {
            res.json({result: result});
        }
    })
}

exports.create = (req, res) => {
    Dispense.create(req.body, (err, result) => {
        if (err) res.send(err);
        else {
            res.status(201).json(result)
        }
    })
}

exports.updateDaily = (req, res) => {   
    Dispense.updateDaily(req.params.id, req.body, (err, result) => {
        if (err) res.send(err);
        else {
            res.status(200).json(result);
        }
    })
}

cron.schedule('* * * * *', function () {
    Dispense.updateCronJob();
    console.log('----------------Running cron jobs----------------')
})