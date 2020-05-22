import db_connection from '../config/db';

const Code = function (code) {
    this.code = code.code,
    this.isAdmin = code.isAdmin
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
            result(null, res)
            // if (res.length > 0) result(null, true);
            // else result(null, false);
        }
    });
};

Code.getAllCodes = (result) => {
    db_connection.query("SELECT * FROM code", (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    })
}

export default Code;
