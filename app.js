// app.js
const express = require("express");
const app = express();
const mainController = require("./controllers/mainController");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", mainController.getUsernames);
app.get("/new", mainController.createUsernameGet);
app.post("/new", mainController.createUsernamePost);
app.get("/delete", mainController.deleteUsernames);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Express app listening on port ${PORT}!`)
);
