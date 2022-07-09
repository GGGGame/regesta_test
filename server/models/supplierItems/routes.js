const express = require("express");
const { Op } = require("sequelize");
const Article = require("../article/model");
const Supplier = require("../supplier/model");
const router = express.Router();
const SupplierItems = require("./model");

router.get("/", async (req, res) => {
  try {
    const supplierItems = await SupplierItems.findAll();
    res.send(supplierItems);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

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

router.post("/", async (req, res) => {
  try {
    await SupplierItems.create(req.body);
    res.send("SupplierItems insert correclty!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

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
