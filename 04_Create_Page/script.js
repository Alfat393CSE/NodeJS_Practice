const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    res.write(`<h1>Welcome to Home Page.</h1>`);
    return res.end();
  } else if (req.url === "/men") {
    res.write(`<h1>Welcome to Men Page.</h1>`);
    return res.end();
  } else if (req.url === "/women") {
    res.write(`<h1>Welcome to Women Page.</h1>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.write(`<h1>Welcome to Kids Page.</h1>`);
    return res.end();
  } else if (req.url === "/cart") {
    res.write(`<h1>Welcome to Cart Page.</h1>`);
    return res.end();
  }

  res.write(`
    <html>
      <head>
        <title>Create Page</title>
      </head>
      <body>
        <ul>
            <li><a href='/home'>Home</li>
            <li><a href='/men'>Men</li>
            <li><a href='/women'>Women</li>
            <li><a href='/kids'>Kids</li>
            <li><a href='/cart'>Cart</li>
        </ul>
      </body>
    </html>
    `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
