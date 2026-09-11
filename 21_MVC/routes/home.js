const express = require("express");
const home = express.Router();
const homeController = require("../controllers/home");

home.get("/", homeController.getHome);

exports.home = home;
