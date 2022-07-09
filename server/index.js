const sequelize = require("./config/database_connection");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const articleRouter = require("./models/article/routes");
const suppliersRouter = require("./models/supplier/routes");
const supplierRouter = require("./models/supplierItems/routes");

//#region database init

// find all module to import database models
fs.readdirSync(__dirname + "/models").forEach(function (model) {
  if (fs.existsSync(`${__dirname}/models/${model}/model.js`)) {
    require(`./models/${model}/model`);
  }
});

// database migration
// sequelize.sync({ alter: true });

//#endregion

const app = express();
const port = process.env.SERVER_PORT || 3050;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/article", articleRouter);
app.use("/suppliers", suppliersRouter);
app.use("/supplieritems", supplierRouter);

app.listen(port, () => {
  console.log(`server currently running on port ${port}`);
});
