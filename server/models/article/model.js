const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database_connection");

const Article = sequelize.define("Article", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Article;
