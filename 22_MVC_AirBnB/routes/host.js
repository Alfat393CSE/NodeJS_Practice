const express = require("express");
const host = express.Router();
const hostController = require("../controller/hostController");

host.get("/", hostController.getHomePage);

exports.host = host;
