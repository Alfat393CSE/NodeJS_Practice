const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const { registerHome } = require("./userDetailes");

const user = express.Router();
user.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  console.log(registerHome);
  res.render("home", { registerHome: registerHome , pageTitle: "Alfat", currentPage: "Home" });
});

exports.user = user;
