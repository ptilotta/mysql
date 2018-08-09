var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.bd,
    port: process.env.port
});
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion correcta.');
    }
});

module.exports = connection;