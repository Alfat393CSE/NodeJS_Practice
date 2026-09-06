const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res, next) => {
  console.log("first middleware", req.url, req.method);
  // res.send(`<p>Welcome to first middleware</p>`);
  next();
});

app.post("/pages", (req, res, next) => {
  console.log("second middleware", req.url, req.method);
  res.send(`<p>Welcome to second middleware</p>`);
});

app.use("/", (req, res, next) => {
  console.log("third middleware", req.url, req.method);
  res.send(`<p>Welcome to third middleware</p>`);
});
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
