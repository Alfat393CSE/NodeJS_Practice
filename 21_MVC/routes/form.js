const express = require("express");
const form = express.Router();
const homeController = require("../controllers/home");

form.get("/submit-detailes", homeController.getForm);
form.post("/submit-detailes", homeController.postForm);

exports.form = form;
