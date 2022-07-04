const express = require("express");
const router = express.Router();
const User = require("./model");

router.get("/", (req, res) => {
  try {
    res.send(User.findAll());
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
