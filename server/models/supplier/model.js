const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database_connection");

const Supplier = sequelize.define("Supplier", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Supplier;
