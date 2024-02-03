const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const projects = require("./projects");
const about = require("./about");

//create app

const app = express();

//midddleware
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>My App</h1>");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/about", (req, res) => {
  res.send(about);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
