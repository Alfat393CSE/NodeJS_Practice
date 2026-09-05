const fs = require("fs");
const os = require("os");
const EventEmiter = require("events");

class Logger extends EventEmiter {
  log(message) {
    this.emit("message", { message });
  }
}


