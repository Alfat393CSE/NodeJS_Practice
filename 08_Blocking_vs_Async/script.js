const fs = require("fs");

console.log("1. start of script");

console.log("2. reading file synchronously");
const dataSync = fs.readFileSync(
  "./08_Blocking_vs_Async/user-detailes.txt",
  "utf-8",
);
console.log("3. synchronously read complete");

console.log("4. reading file asynchronously");
fs.readFile(
  "./08_Blocking_vs_Async/user-detailes.txt",
  "utf-8",
  (err, dataAsync) => {
    if (err) throw err;
    console.log("5. Asynchronously read complete");
  },
);

console.log("6. end of script");
