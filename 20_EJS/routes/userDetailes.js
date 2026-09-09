const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtils");

const userDetailes = express.Router();
userDetailes.get("/submit-detailes", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("inputForm", { pageTitle: "Alfat", currentPage: "Get" });
});

const registerHome = [];

userDetailes.post("/submit-detailes", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  registerHome.push(req.body);
  res.render("outputForm", { pageTitle: "Alfat", currentPage: "Post" });
});

exports.userDetailes = userDetailes;
exports.registerHome = registerHome;
