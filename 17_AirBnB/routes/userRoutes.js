const express = require("express");
const path = require("path");
const userRoute = express.Router();
const rootDir = require("../utils/pathUtils");

userRoute.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRoute;
