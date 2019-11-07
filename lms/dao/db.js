var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'database-1.crhcwiispks5.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'password',
    database : 'library'
});

module.exports = connection;