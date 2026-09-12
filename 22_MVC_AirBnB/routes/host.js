const express = require("express");
const host = express.Router();
const hostController = require("../controller/hostController");

host.get("/", hostController.getHomePage);
host.get("/bookings", hostController.bookings);
host.post("/bookings", hostController.myBookings);

exports.host = host;
