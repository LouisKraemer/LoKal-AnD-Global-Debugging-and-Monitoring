const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

server.post("/", function (request, response) {
  console.log(request.body);
  response.status(200).send();
});

server.listen(80);
