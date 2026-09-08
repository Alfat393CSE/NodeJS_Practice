const express = require("express");
const path = require("path");

const rootDir = require("./utils/pathUtils");
const user = require("./routes/user.js");
const userDetailes = require("./routes/userDetailes.js");

const app = express();

app.use(express.urlencoded());

app.use(user);
app.use("/user", userDetailes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
