require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (err) console.log('Cannot connect to Database\n' + err.stack);
  console.log('Database connected to ' + connection.threadId);
});

module.exports = connection;