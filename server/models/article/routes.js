const express = require("express");
const router = express.Router();
const Article = require("./model");

// get every records in table
router.get("/", async (req, res) => {
  try {
    const article = await Article.findAll();
    res.send(article);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// get single item by id
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(article);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// insert body object in tables
router.post("/", async (req, res) => {
  try {
    await Article.create(req.body);
    res.send("Article insert correclty!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// edit by id
router.patch("/:id", async (req, res) => {
  try {
    await Article.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send("Article updated correctly!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// delete by id
router.delete("/:id", async (req, res) => {
  try {
    await Article.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Article removed correctly.");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

module.exports = router;
