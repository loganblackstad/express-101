const data = require("./data");

const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () =>
  console.log(`listening on port http://127.0.0.1:${port}`)
);

app.get("/cat", (req, res) =>
  res.send(data.filter((animal) => animal.type == "cat"))
);

app.get("/dog", (req, res) =>
  res.send(data.filter((animal) => animal.type == "dog"))
);

// put links to all pages in each page
app.get("/:page", (req, res) => {
  res.send(`
  <a href='./legal'>./legal</a><br/>
  <a href='./about'>./about</a><br/>
  <a href='./contact'>./contact</a><br/>
  `);
});

// app.get("/:id", (req, res) =>
//   res.send(data.filter((a) => a.id == req.params.id))
// );

// app.get("/", (req, res) => {
//   let age = req.query.age;
//   let color = req.query.color;
//   let a = [];
//   if (age) {
//     a = data.filter((iter) => iter.age == age);
//   }

//   if (color) {
//     a = a.filter((iter) => iter.color == color);
//   }

//   res.json(data.filter((a) => a.id == req.params.id));
// });

// app.get("/", (req, res) => res.send(`<h1>An Inspiring Message!</h1>`));

// app.listen(port, () =>
//   console.log(`listening on port http://localhost:${port}`)
// );

// app.put("/legal", function (req, res) {
//   res.send("Got a PUT request at /legal");
// });

// app.put("/about", function (req, res) {
//   res.send("Got a PUT request at /about");
// });

// app.put("/contact", function (req, res) {
//   res.send("Got a PUT request at /contact");
// });

// app.get("/legal", (req, res) => res.send(`This is Legal`));
// app.get("/legal/:page", (req, res) => res.send(req.params));
// app.get("/legal/:page", (req, res) => res.send(req.params.page));
// app.get("/legal/:page/:bar", (req, res) =>
//   res.send(`<h1>${req.params.page}</h1>`)
// );

// app.get("/about", (req, res) => res.send(`<h1>About Page</h1>`));
// app.get("/contact", (req, res) => res.send(`<h1>Contact Page</h1>`));
