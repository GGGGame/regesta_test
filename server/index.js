const sequelize = require("./config/database_connection");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const userRouter = require("./models/user/routes");
const suppliersRouter = require("./models/supplier/routes");
const bodyParser = require("body-parser");

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/suppliers", suppliersRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server currently running on port ${port}`);
});
