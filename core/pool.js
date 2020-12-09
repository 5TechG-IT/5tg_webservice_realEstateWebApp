const util = require('util');
const mysql = require('mysql');
/**
 * Connection to the database.
 *  */
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '207.180.210.115',
    user: 'rfs_db_5techg_admin', // use your mysql username.
    password: '3WRgbmiNHxfe3JK', // user your mysql password.
    database: 'rfs_db_5techg'
});

pool.getConnection((err, connection) => {
    if (err)
        console.error("Something went wrong connecting to the database ...");

    if (connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;