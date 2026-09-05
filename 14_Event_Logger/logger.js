const fs = require("fs");
const os = require("os");
const EventEmiter = require("events");

class Logger extends EventEmiter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "/14_Event_Logger/eventLogger.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logToFile);


