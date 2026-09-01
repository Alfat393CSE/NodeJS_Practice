const http = require("http");
const PORT = 3000;
const requestHandler = require("./user");

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
