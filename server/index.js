require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const routes = ["/", "/blog", "/apps", "/music", "/contact"];

app.use(express.static(path.join(__dirname, "../build")));

for (let route of routes) {
  app.get(route, (_, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}

app.listen(port);
