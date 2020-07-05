const express = require("express");
const bcrypt = require("bcrypt");
const { Account } = require("../models");

const router = express.Router();

const saltRounds = 10;

router.get("/sign-in", (req, res) => {
  return res.json("sign-in");
});

router.get("/sign-up", async (req, res) => {
  const email = "rafaelmeira@me.com";
  const password = "123123";

  const result = await Account.create({
    email,
    password: bcrypt.hashSync(password, saltRounds),
  });

  return res.json(result);
});

module.exports = router;
