const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const userDetailes = express.Router();

userDetailes.get("/submit-detailes", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "inputForm.html"));
});

userDetailes.post("/submit-detailes", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "outputForm.html"));
});

module.exports = userDetailes;
