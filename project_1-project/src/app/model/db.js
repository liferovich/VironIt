const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
});

connection.connect(err => {
    if (err) throw error;
    console.log("успешно соединено с базой данных");
});

module.exports = connection;
