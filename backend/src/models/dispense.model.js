import db_connection from '../config/db';

const Dispense = function (dispense) {
    this.category = dispense.category;
    this.currentValue = dispense.currentValue;
    this.maximumValue = dispense.maximumValue;
    this.hopeValue = dispense.hopeValue;
    this.deviceId = dispense.deviceId;
    this.type = dispense.type;
};

Dispense.update = (dispense, result) => {
    console.log("dispense>>>>>>>>>>>>>>>>>", dispense);
    db_connection.query('Select * from dispense Where deviceId= ?', dispense.deviceId, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(res.length);
            if (res.length > 0) {
                db_connection.query("Update dispense Set category = ?, currentValue = ?, hopeValue = ?, maximumValue = ? updated_at = now() Where deviceId = ?",
                [dispense.category, dispense.currentValue, dispense.hopeValue, dispense.maximumValue, dispense.deviceId], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log('Error: ', updateErr);
                        result(err, null);
                    } else {
                        console.log(updateResult);
                        result(null, updateResult);
                    }
                })
            } else {
                db_connection.query("Insert Into dispense SET ?, created_at=now(), updated_at=now()", new Dispense(dispense), (createErr, createResult) => {
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

Dispense.cancel = (id, reason, result) => {
    db_connection.query("update dispense set cancel_reason=?, status=0 where id=?", [reason.reason, id], function (err, response) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(response);
            result(null, response)
        }
    })
}

Dispense.getByDeviceId = (deviceId, result) => {
    db_connection.query("Select * From dispense WHERE deviceId= ? AND status = true", deviceId, (err, res) => {
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
    db_connection.query("Select * From dispense WHERE deviceId= ? AND status = true", dispense.deviceId, (getError, getResponse) => {
        if (getError) {
            console.log('error: ', getError);
            result(getError, null);
        } else {
            if (getResponse.length > 0) {
                result(null, 'exist');
            } else {
                db_connection.query("Insert Into dispense Set ?, created_at=now(), updated_at=now(), status=true", new Dispense(dispense), (err, res) => {
                    if (err) {
                        console.log('error: ', err);
                        result(err, null)
                    } else {
                        console.log("response>>>>>>>>> ", res);
                        db_connection.query("Insert Into daily_challenge Set Dispense_Id=?", res.insertId);
                        db_connection.query("insert into reaction set dispense_id=?", res.insertId)
                        db_connection.query("Select * From dispense Where id=?", res.insertId, function(e, response) {
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
    db_connection.query("Update daily_challenge Set " + 'day' + (data.day) + "=? Where Dispense_Id=?", [data.success, id], function(err, response) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(response);
            result(null, response);
        }
    })
}

Dispense.getDaily = (id, result) => {
    console.log(id);
    db_connection.query("SELECT * FROM daily_challenge WHERE Dispense_Id=?", id, function(err, res) {
        if (err) result(err, null);
        else result(null, res[0])
    })
}

Dispense.getDashboard = (result) => {
    let response = {}
    db_connection.query("SELECT COUNT(id) FROM dispense", (err, res) => {
        console.log(res)
        response.all = res[0]['COUNT(id)'];
        db_connection.query("SELECT COUNT(id) FROM dispense WHERE status=0 AND day_after=14", (err, res) => {
            console.log(res);
            response.completed = res[0]['COUNT(id)'];
            db_connection.query("SELECT COUNT(id) FROM dispense WHERE status=1", (err, res) => {
                console.log(res);
                response.running = res[0]['COUNT(id)'];
                db_connection.query("SELECT COUNT(id) FROM dispense WHERE status=0 AND day_after<14", (err, res) => {
                    console.log(res);
                    response.cancelled = res[0]['COUNT(id)'];
                    result(null, response);
                    console.log(response)
                });
            });
        });
    })
}

Dispense.getAllDispenses = (result) => {
    db_connection.query("SELECT * FROM dispense", (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    })
}

Dispense.updateCronJob = (result) => {
    db_connection.query("Update dispense Set day_after = day_after + 1 Where day_after < 14 And status = 1")
    db_connection.query("Update dispense Set status = 0 Where day_after = 14");
    db_connection.query("SELECT * FROM dispense WHERE status=1", function(err1, dispenses) {
        for (let dispense of dispenses) {
            console.log(dispense.id, dispense.day_after)
            db_connection.query("SELECT * FROM daily_challenge WHERE Dispense_Id=?", dispense.id, function(err2, feedback) {
                let count = 0;
                for (let i = 0; i < dispense.day_after; i++) {
                    if (feedback[0]['day' + (i + 1)] === null) count++;
                }
                // if (count > 2) {
                //     db_connection.query("UPDATE dispense SET status=0 WHERE id=?", dispense.id);
                // }
                console.log(count)
            })
        }
    })
}

export default Dispense;
