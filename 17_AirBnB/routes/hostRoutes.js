const express = require("express");
const path = require("path");
const hostRoute = express.Router();
const rootDir = require("../utils/pathUtils");

hostRoute.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRoute.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "getHome.html"));
});

module.exports = hostRoute;
