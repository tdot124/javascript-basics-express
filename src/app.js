const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:name', (req, res) => {
  res.status(200).send({ result: sayHello(req.params.name) });
});

module.exports = app;
