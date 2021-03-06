const express = require("express");
var router = express.Router();
const Customer = require("../models/customerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auths = require("../middleware/auths");

router.post("/", auths, async (req, res) => {
  try {
    const { name } = req.body;

    const newCustomer = new Customer({
      name
    });

    const saveCustomer = await newCustomer.save();
    res.json(saveCustomer);
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Data delete Error" });
  }
});

router.get("/", auths, async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Data delete Error" });
  }
});

module.exports = router;
