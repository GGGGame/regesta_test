const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("regesta_test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const runServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

runServer();
