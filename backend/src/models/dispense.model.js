import db_connection from '../config/db';

const Dispense = function (dispense) {
    this.topic = dispense.Topic;
    this.intensity = dispense.Intensity;
    this.deviceId = dispense.DeviceId;    
};

Dispense.update = (dispense, result) => {
    console.log("dispense>>>>>>>>>>>>>>>>>", dispense);
    db_connection.query('Select * from dispense Where deviceId= ?', dispense.DeviceId, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(res.length);
            if (res.length > 0) {
                db_connection.query("Update dispense Set Topic = ?, Intensity = ?, updated_At = now() Where DeviceId = ?",
                [dispense.Topic, dispense.Intensity, dispense.DeviceId], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log('Error: ', updateErr);
                        result(err, null);
                    } else {
                        console.log(updateResult);
                        result(null, updateResult);
                    }
                })
            } else {
                db_connection.query("Insert Into dispense SET ?, created_At=now(), updated_At=now()", new Dispense(dispense), (createErr, createResult) => {
                    if (createErr) {
                        console.log('error: ', createErr);
                        result(err, null);
                    } else {
                        console.log(createResult);
                        result(null, createResult);
                    }
                })
            }
        }
    })
}

Dispense.getByDeviceId = (deviceId, result) => {
    db_connection.query("Select * From dispense WHERE DeviceId= ? AND Status = true", deviceId, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}

Dispense.create = (dispense, result) => {
    db_connection.query("Select * From dispense WHERE DeviceId= ? AND Status = true", dispense.DeviceId, (getError, getResponse) => {
        if (getError) {
            console.log('error: ', getError);
            result(getError, null);
        } else {
            if (getResponse.length > 0) {
                result(null, 'Already exist');
            } else {
                db_connection.query("Insert Into dispense Set ?, created_At=now(), updated_At=now(), Status=true", new Dispense(dispense), (err, res) => {
                    if (err) {
                        console.log('error: ', err);
                        result(err, null)
                    } else {
                        console.log("response>>>>>>>>> ", res);
                        db_connection.query("Insert Into daily_challenge Set Dispense_Id=?", res.insertId);
                        db_connection.query("Select * From dispense Where Id=?", res.insertId, function(e, response) {
                            console.log(response)
                            result(null, response);
                        });
                    }
                })
            }
        }
    })
    
}

Dispense.updateDaily = (id, data, result) => {
    console.log(id, data);
    db_connection.query("Update daily_challenge Set " + 'day' + (data.day + 1) + "=? Where Dispense_Id=?", [data.success, id], function(err, response) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(response);
            result(null, response);
        }
    })
}

Dispense.updateCronJob = (result) => {
    db_connection.query("Update dispense Set Day_After = Day_After + 1 Where Day_After < 14 And Status = 1")
    db_connection.query("Update dispense Set Status = 0 Where Day_After = 14");
    db_connection.query("SELECT * FROM dispense WHERE Status=1", function(err1, dispenses) {
        for (let dispense of dispenses) {
            console.log(dispense.Id, dispense.Day_After)
            db_connection.query("SELECT * FROM daily_challenge WHERE Dispense_Id=?", dispense.Id, function(err2, feedback) {
                let count = 0;
                for (let i = 0; i < dispense.Day_After; i++) {
                    if (feedback[0]['day' + (i + 1)] === null) count++;
                }
                if (count > 2) {
                    db_connection.query("UPDATE dispense SET Status=0 WHERE Id=?", dispense.Id);
                }
                console.log(count)
            })
        }
    })
}

export default Dispense;
