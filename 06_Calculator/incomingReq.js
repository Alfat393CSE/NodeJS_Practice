const incomingRequest = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const jsonObj = Object.fromEntries(params);
    const result = Number(jsonObj.firstName) + Number(jsonObj.secondName);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>  
      <html>  
    `);
    return res.end();
  });
};

module.exports = incomingRequest;
