const express = require("express");
const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third middleware", req.url, req.method);
//   res.send(`<p>Welcome to testing middleware</p>`);
// });

app.get("/", (req, res, next) => {
  console.log("fourth middleware", req.url, req.method);
  res.send(`<h1>Welcome to HomePage</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("fifth middleware", req.url, req.method);
  res.send(`<h1>Please enter your detailes</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="enter your name">
    <input type="email" name="email" placeholder="enter your email">
    <input type="Submit">
  </form>;`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("sixth middleware", req.url, req.method);
  res.send(`<p>We will contact you soon</p>`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
