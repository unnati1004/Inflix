const express = require("express");
const router = express.Router();

const itemMaster = [
  { code: 100, unitPrice: 20.0, name: "popcorn" },
  { code: 101, unitPrice: 50.0, name: "kurkure" },
  { code: 100, unitPrice: 20.0, name: "chips" },
  { code: 103, unitPrice: 10.0, name: "ice-cream" },
];
// post batch
router.post("/items", async (req, res) => {
  try {
    itemMaster.push(req.body);
    res.status(201).send(itemMaster);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// get all batch
router.get("/items/id", async (req, res) => {
  try {
    const data = await itemMaster.find().lean().exec();
    res.status(201).send(data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
