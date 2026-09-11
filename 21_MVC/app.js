const express = require("express");
const path = require("path");

const rootDir = require("./utils/pathUtils");
const { home } = require("./routes/home");
const { form } = require("./routes/form");
const errorController = require("./controllers/error");

const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(home);
app.use("/user", form);
app.use(errorController.errorPage);

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is running at http://localhost:${PORT}`);
});
