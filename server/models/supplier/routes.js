const express = require("express");
const router = express.Router();
const Supplier = require("./model");

// get every records in table
router.get("/", async (req, res) => {
  try {
    const supplier = await Supplier.findAll();
    res.send(supplier);
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// insert body object in tables
router.post("/", async (req, res) => {
  try {
    await Supplier.create(req.body);
    res.send("Supplier insert correclty!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// edit by id
router.patch("/:id", async (req, res) => {
  try {
    await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send("Supplier updated correctly!");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

// delete by id
router.delete("/:id", async (req, res) => {
  try {
    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Supplier removed correctly.");
  } catch (error) {
    res.send(error);
    res.sendStatus(400);
  }
});

module.exports = router;
