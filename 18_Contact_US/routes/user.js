const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const user = express.Router();

user.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = user;
