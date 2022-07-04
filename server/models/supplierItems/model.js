const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database_connection");
const Article = require("../article/model");
const Supplier = require("../supplier/model");

const SupplierItems = sequelize.define("SupplierItems", {
  ArticleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Article,
      key: "id",
    },
  },
  SupplierId: {
    type: DataTypes.INTEGER,
    references: {
      model: Supplier,
      key: "id",
    },
  },
  SupplierTimeShip: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  SupplierTotalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Article.belongsToMany(Supplier, { through: SupplierItems });
Supplier.belongsToMany(Article, { through: SupplierItems });

module.exports = SupplierItems;
