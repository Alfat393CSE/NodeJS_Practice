const fs = require("fs");

const requestHandler = (req, res) => {
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
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);

      //   const jsonObject = {};
      //   for (const [key, val] of params.entries()) {
      //     jsonObject[key] = val;
      //   }
      const jsonObject = Object.fromEntries(params);
      const jsonString = JSON.stringify(jsonObject);
      console.log(jsonString);
      fs.writeFileSync("./05_Parsing_Request/user.txt", jsonString);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
};

module.exports = requestHandler;
