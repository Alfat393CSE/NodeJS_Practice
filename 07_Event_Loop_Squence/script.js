console.log("1. start of script");

Promise.resolve().then(() => console.log("2. microtask"));

setTimeout(() => console.log("3. timer 1"));

const fs = require("fs");
fs.readFile("user-detailes.txt", () => console.log("4. I/O operation"));

setImmediate(() => console.log("5. immediate 1"));

process.on("exit", (code) => {
  console.log("6. exit event");
});

console.log("7. script end");
