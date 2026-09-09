const express = require("express");
const path = require("path");

const rootDir = require("./utils/path");
const user = require("./routes/user");
const userDetailes = require("./routes/userDetailes");

const app = express();
app.use(express.urlencoded());

app.use(user);
app.use("/user", userDetailes);
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is running at http://localhost:${PORT}`);
});
