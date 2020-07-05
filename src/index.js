const express = require("express");
const db = require("./models");

const app = express();

const authController = require("./controllers/auth");

app.use("/auth", authController);

app.get("/", (request, response) => {
  return response.json("Api runing...");
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Listening");
  });
});
