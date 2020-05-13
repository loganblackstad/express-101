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
// app.get("/greet/Jamison", (req, res) => res.send(`Hello, ${req.params}`));
// app.get("/greet/Manny", (req, res) => res.send(`Hello, ${req.params}`));

app.get("/test", (req, res) => {
  console.log(req.query);
});

app.get("/hello1", function (req, res) {
  var name = req.query.name || "world";
  res.send("Hello " + name + "!");
});
