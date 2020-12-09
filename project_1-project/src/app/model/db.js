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
// connection.connect(err => {
//     if (err) throw error;
//     console.log("Connected!");
//     const sql = "CREATE TABLE IF NOT EXISTS `users` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

module.exports = connection;
