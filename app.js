/*
In your terminal:
> touch app.js
> npm init -y
> npm install express
> touch .gitignore
> npm start

> node app.js
> node app-express.js

--> you can add files to the .gitignore file


*/


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

// put links to all pages in each page regardless of express endpoint
// app.get("/:page", (req, res) => {
//   res.send(`
//   <a href='./legal'>./legal</a><br/>
//   <a href='./about'>./about</a><br/>
//   <a href='./contact'>./contact</a><br/>
//   `);
// });


function radLogger(req, res, next) {
  console.log(`YOUR REQUEST: `, req.query);
  next();
};

// app.use(radLogger, express.static('public'));

app.use(radLogger);

app.get("/:id", (req, res, next) => {

  const results = data.filter((a) => a.id == req.params.id)

  if (results.length > 0) return res.send(data.filter((a) => a.id == req.params.id))

  next()
})

// app.get("/", (req, res, next) => res.send(`<h1>An Inspiring Message!</h1>`));



// for http requests w params in the URL:
// ex: http://localhost:8000/?age=3
app.get("/", (req, res, next) => {
  let age = req.query.age;
  let color = req.query.color;
  let a = [];
  if (age) {
    a = data.filter((iter) => iter.age == age);
  }

  if (color) {
    a = a.filter((iter) => iter.color == color);
  }

  console.log(a)

  res.json(a);
});


// app.listen(port, () =>
//   console.log(`listening on port http://localhost:${port}`)
// );

app.put("/legal", function (req, res) {
  res.send("Got a PUT request at /legal");
});

app.put("/about", function (req, res) {
  res.send("Got a PUT request at /about");
});

app.put("/contact", function (req, res) {
  res.send("Got a PUT request at /contact");
});

app.get("/legal", (req, res) => res.send(`This is Legal`));
app.get("/legal/:page", (req, res) => res.send(req.params));
app.get("/legal/:page", (req, res) => res.send(req.params.page));
app.get("/legal/:page/:bar", (req, res) =>
  res.send(`<h1>${req.params.page}</h1>`)
);

app.get("/about", (req, res) => res.send(`<h1>About Page</h1>`));
app.get("/contact", (req, res) => res.send(`<h1>Contact Page</h1>`));
