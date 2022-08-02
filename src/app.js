const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:name', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.name) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(req.params.string, length) });
});

module.exports = app;
