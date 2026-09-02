const fs = require("fs");

const request = (req, res) => {
  console.log(req.url, req.method);
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
  } else if (
    req.url.toLowerCase() === "/submit-task" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const jsonObj = Object.fromEntries(params);
      const jsonStr = JSON.stringify(jsonObj);

      fs.writeFile("./09_Event_Loop_Async/user-detailes", jsonStr, (err) => {
        console.log("Data written successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Node JSW</title>
        </head>
        <body>
          <h1>404 page not found</h1>
        </body>
      </html>
    `);
    return res.end();
  }
};

module.exports = request;
