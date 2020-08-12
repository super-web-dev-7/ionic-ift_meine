import db_connection from '../config/db';

const Code = function (code) {
    this.code = code.code;
    this.isAdmin = code.isAdmin;
    this.backup_password = code.backup_password;
    this.type = code.type;
};

Code.create = (newCode, result) => {
    db_connection.query("INSERT INTO code SET ?", newCode, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
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

Code.backup = (compareCode, result) => {
    db_connection.query("SELECT * FROM code WHERE backup_password= ?", compareCode, (err, res) => {
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

Code.getAllCodes = (type, result) => {
    db_connection.query("SELECT * FROM code WHERE type=?", type, (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    })
}

export default Code;
