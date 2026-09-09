const express = require("express");
const path = require("path");

const rootDir = require("./utils/pathUtils");
const { user } = require("./routes/user");
const { userDetailes } = require("./routes/userDetailes");
const pathUtils = require("./utils/pathUtils");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use(user);
app.use("/user", userDetailes);
app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "page not found", currentPage: "Error" });
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is running at http://localhost:${PORT}`);
});
