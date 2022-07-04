const sequelize = require("./config/database_connection");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const userRouter = require("./models/user/routes");

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

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server currently running on port ${port}`);
});
