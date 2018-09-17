const mysql2 = require('mysql2');
const connection = mysql2.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'P3A',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports = connection;