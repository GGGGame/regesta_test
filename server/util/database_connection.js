const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("regesta_dev_test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

module.exports = sequelize;
