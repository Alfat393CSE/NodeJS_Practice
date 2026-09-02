const http = require("http");
const request = require("./user");
const PORT = 3000;

const server = http.createServer(request);

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
