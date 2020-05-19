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
    db_connection.query("Select * From dispense WHERE DeviceId= ?", deviceId, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    })
}
// Code.create = (newCode, result) => {
//     db_connection.query("INSERT INTO code SET ?", newCode, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         } else {
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     })
// };

// Code.check = (compareCode, result) => {
//     db_connection.query("SELECT * FROM code WHERE Code= ?", compareCode, (err, res) => {
//         if (err) {
//             console.log('error: ', err);
//             result(err, null);
//         } else {
//             console.log(res.length);
//             if (res.length > 0) result(null, true);
//             else result(null, false);
//         }
//     });
// };

export default Dispense;
