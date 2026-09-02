const http = require("http");
const requesthandler = require("./addition");
const PORT = 3000;

const server = http.createServer(requesthandler);

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
