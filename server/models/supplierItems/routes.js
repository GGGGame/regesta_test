const express = require("express");
const { Op } = require("sequelize");
const Article = require("../article/model");
const Supplier = require("../supplier/model");
const router = express.Router();
const SupplierItems = require("./model");

// get every records in table
router.get("/", async (req, res) => {
  try {
    const supplierItems = await SupplierItems.findAll();
    res.send(supplierItems);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// get supplierItems and Article to filter by name
router.get("/details", async (req, res) => {
  try {
    const article = await Article.findAll();
    const supplierItems = await SupplierItems.findAll();
    res.send({ article, supplierItems });
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// get result by filter
router.get("/details/:amount/:shiptime/:date", async (req, res) => {
  try {
    const article = await Article.findAll();
    const supplierItems = await SupplierItems.findAll({
      where: {
        Stocks: {
          [Op.gte]: req.params.amount,
        },
        TimeShip: {
          [Op.gte]: req.params.shiptime,
        },
        DiscountDate: {
          [Op.gte]: req.params.date,
        },
      },
    });
    res.send({ article, supplierItems });
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// insert body object in tables
router.post("/", async (req, res) => {
  try {
    await SupplierItems.create(req.body);
    res.send("SupplierItems insert correclty!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// edit by id
router.patch("/:id", async (req, res) => {
  try {
    await SupplierItems.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send("SupplierItems updated correctly!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// delete by id
router.delete("/:id", async (req, res) => {
  try {
    await SupplierItems.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("SupplierItems removed correctly.");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

module.exports = router;
