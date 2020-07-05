const express = require("express");
const db = require("./models");
const response = require("./middlewares/response");

const authController = require("./controllers/auth");

const app = express();

// middlewares express
app.use(response);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authController);

app.get("/", (request, response) => {
  return response.json("Api runing...");
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Listening");
  });
});
