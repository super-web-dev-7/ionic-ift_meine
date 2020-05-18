import db_connection from '../config/db';

const Code = function (code) {
    this.code = code.code
};

Code.create = (newCode, result) => {
    db_connection.query("INSERT INTO code SET ?", newCode, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

Code.check = (compareCode, result) => {
    db_connection.query("SELECT * FROM code WHERE Code= ?", compareCode, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log(res.length);
            if (res.length > 0) result(null, true);
            else result(null, false);
        }
    });
};

export default Code;
