const express = require('express');
const bodyParser = require('body-parser');

const ngrok = require('ngrok');

const initNgRock = async () => {
  const url = await ngrok.connect();
  console.log(`Local server exposed on ${url}`);
};

initNgRock().catch((error) => {
  console.error(error);
  ngrok.disconnect();
})

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

server.post('/', function(request, response) {
  console.log(request.body);
  response.status(200).send();
});

server.listen(80);