const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

const dropTable = {
  users: 'DROP TABLE users',

}
const createTable = {
  user: `CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    password VARCHAR(30) NOT NULL);`,
  houses: `CREATE TABLE houses(house_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    checkin DATE NOT NULL,
    checkout DATE NOT NULL,
    price FLOAT NOT NULL,
    totalCnt INT NOT NULL,
    houseName VARCHAR(255) NOT NULL);`
}

module.exports = db;