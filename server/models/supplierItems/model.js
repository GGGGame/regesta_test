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
    allowNull: false,
  },
  SupplierId: {
    type: DataTypes.INTEGER,
    references: {
      model: Supplier,
      key: "id",
    },
    allowNull: false,
  },
  TimeShip: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Stocks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  DiscountItemsAmount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  DiscountDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DiscountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Article.belongsToMany(Supplier, { through: SupplierItems });
Supplier.belongsToMany(Article, { through: SupplierItems });

module.exports = SupplierItems;
