const fs = require("fs");
const content = "This is Alfat Tasnim Hasan";

fs.writeFile("./01_FS/output.txt", content, (err) => {
  if (err) throw new Error("Something went wrong!");
  console.log("node.js is working...");
});
