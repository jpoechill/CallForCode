const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 8000;
const helmet = require("helmet");
  
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://www.gstatic.com"],
      scriptSrc: ["'self'", "https://www.gstatic.com"],
      styleSrc: ["'self'"]
    }
  })
);

app.use(express.static(__dirname + "/styles"));

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.route("/application").get((req, res) => {
  res.sendFile(__dirname + "/WildfireSurvivorApplication/application.html");
});

app.route("/dashboard").get((req, res) => {
  res.sendFile(__dirname + "/WildfireSurvivorDashboard/dashboard.html");
});

const server = app.listen(port, function() {
  console.log("express listening on: " + port);
});
