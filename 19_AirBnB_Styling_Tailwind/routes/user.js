const express = require("express");
const user = express.Router();
const rootDir = require("../utils/path");
const path = require("path");

user.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = user;
