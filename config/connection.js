const mysql2 = require("mysql2");

const connection = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'qweqwe123',
        database: 'tracker_db'
      },);

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;