import mysql from 'mysql';
import app from './config/express';
import config from './config/config';

if (!config.port) {
    process.exit(1)
}

const PORT = parseInt(config.port, 10) || 7000;

/**
 *Connect with MySQL
 */
const db_connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

db_connection.connect(function (err) {
    if (err) {
        throw new Error(`unable to connect to database: ${config.mysql.host}`);
    }
});

/**
 *
 * Server Activation
*/

const server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Ready on port ${PORT}`);
});
