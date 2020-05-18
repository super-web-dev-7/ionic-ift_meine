import mysql from 'mysql';
import config from "./config";

const db_connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

db_connection.connect(function (err) {
    if (err) {
        throw err;
    }
});

export default db_connection;
