const express = require("express");
const pasth = require("path");
const bcrypt = require("bcrypt");

const app = express();

// USE EJS as the view engine
app.set("view engine", "ejs");
// static file
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
