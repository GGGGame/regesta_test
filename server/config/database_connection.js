const { Sequelize } = require("sequelize");
require("dotenv").config();

// see .env.example to configure new .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;
