const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url,
  );

  const extName = path.extname(filePath).toLowerCase();

  let mimeType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  const contentType = mimeType[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(`404 : page not found!`);
      } else {
        res.writeHead(500);
        res.end(`server error : ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
