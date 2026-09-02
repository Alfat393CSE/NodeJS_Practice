const incomingRequest = require("./incomingReq");

const requesthandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <h1>Welcome to the Calculator page</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
        <h1>Insert your values to the input fields:</h1>
        <form action="/calculate-result" method="POST">
          <input type="text" name="firstName" placeholder="enter the first name">
          <input type="text" name="secondName" placeholder="enter the second name">
          <input type="submit" value="Sum">
        </form>
        </body>
      </html>
    `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return incomingRequest(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <h1>404 not found</h1>
        </body>
      </html>
    `);
  res.end();
};

module.exports = requesthandler;
