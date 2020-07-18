import db_connection from '../config/db';

const Reaction = function (dispense) {
    this.category = dispense.category;
    this.currentValue = dispense.currentValue;
    this.maximumValue = dispense.maximumValue;
    this.hopeValue = dispense.hopeValue;
    this.deviceId = dispense.deviceId;
    this.type = dispense.type;
};

Reaction.update = (id, data, result) => {
    db_connection.query('update reaction set ' + data.field + '=? where dispense_id=?', [data.value, id], (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

export default Reaction;
