/*
In your terminal:
> touch app.js
> npm init -y
> npm install express
> touch .gitignore
> npm start

--> you can add files to the .gitignore file


*/

const express = require("express");
const app = express();
const port = 8001;

app.listen(port, () =>
  console.log(`listening on port http://127.0.0.1:${port}`)
);

app.get("/", (req, res) => res.send(`Hello, world!`));

app.get("/cats", (req, res) => res.send(`Meow`));
app.get("/dogs", (req, res) => res.send(`Woof`));
app.get("/cats_and_dogs", (req, res) => res.send(`Living together`));

app.get("/greet/:name", (req, res) => res.send(`Hello, ${req.params.name}`));

// req.query.[searchVariable] is called in the url request: "?[searchVariable]=[someValue]"
// ex: localHost/hello1?name=Joe&age=28"

// app.get("/:name/:age", (req, res) => {
//   console.log(req.query);
// });

app.get("/hello", function (req, res) {
  var name = req.query.name || "world";
  var age = req.query.age || "0";
  var result = "Hello " + name + ", ";
  if (age) {
    result += `you were born in ${2020 - +age}!`;
  }
  res.send(result);
});

// example: http://localhost:8001/hello?name=Logan&age=27

// general boolean switch syntax
// if [boolean] ? this : that
