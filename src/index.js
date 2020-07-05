const express = require("express");

const app = express();

const authController = require("./controllers/auth");

app.use("auth", authController);

app.get("/", (request, response) => {
  return response.json("Api runing...");
});

app.listen(3001, () => {
  console.log("Listening");
});
