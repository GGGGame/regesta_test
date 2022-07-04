const express = require("express");
const router = express.Router();
const Article = require("./model");

// GET all items
router.get("/", async (req, res) => {
  try {
    const article = await Article.findAll();
    res.send(article);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// GET single item by ID
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

// POST items by body
router.post("/", async (req, res) => {
  try {
    await Article.create(req.body);
    res.send("Article insert correclty!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// PATCH item by ID
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

// DELETE Item by id
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
