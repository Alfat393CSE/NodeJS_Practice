const http = require("http");
const fs = require("fs");
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
        <form action = "/submit-task" method = "POST">
        <input type="text" id="name" name="name" placeholder="enter your name">
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
        <button type="submit">Submit</button>
        </form> 
      </body>
    </html>`,
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-task" && req.method === "POST") {
    fs.writeFileSync("./03_Request_Response/user.txt", "Alfat Tasnim Hasan");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
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

  // process.exit(); // stop the server after logged the request
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
