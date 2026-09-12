const express = require("express");
const store = express.Router();
const storeController = require("../controller/storeController");

store.get("/add-home", storeController.getForm);
store.post("/output-home", storeController.getFormOutput);

exports.store = store;
