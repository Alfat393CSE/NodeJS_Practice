const express = require("express");
const userDetailes = express.Router();
const rootDir = require("../utils/path");
const path = require("path");

userDetailes.get("/submit-detailes", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "inputForm.html"));
});

userDetailes.post("/submit-detailes", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "outputForm.html"));
});

module.exports = userDetailes;
