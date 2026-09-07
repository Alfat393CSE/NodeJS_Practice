const express = require("express");
const path = require("path");

const hostRoute = require("./routes/hostRoutes");
const userRoute = require("./routes/userRoutes");
const rootDir = require("./utils/pathUtils");

const app = express();

app.use(express.urlencoded());
app.use("/host", hostRoute);
app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
