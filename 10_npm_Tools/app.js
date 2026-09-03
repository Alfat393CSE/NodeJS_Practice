const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("Alfat");
});
