const express = require("express");
const router = express.Router();
const User = require("./model");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

router.post("/", async (req, res) => {
  try {
    await User.create(req.body);
    res.send("Account insert correclty!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send("Account updated correctly!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Account removed correctly.");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

module.exports = router;
