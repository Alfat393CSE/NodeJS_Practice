const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(
      `<html>
      <head>
        <title>Node JS</title>
      </head>
      <body>
        <h1> this is Alfat</h1>
      </body>
    </html>`,
    );
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-type", "text/html");
    res.write(
      `<html>
      <head>
        <title>Node JS</title>
      </head>
      <body>
        <h1> Products</h1>
      </body>
    </html>`,
    );
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write(
    `<html>
      <head>
        <title>Node JS</title>
      </head>
      <body>
        <h1> this is ordinary one</h1>
      </body>
    </html>`,
  );
  res.end();

  // process.exit(); // stop the server after logged the request
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
