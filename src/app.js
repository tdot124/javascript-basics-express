const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:name', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.name) });
});

app.get('/strings/upper/:name', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.name) });
});

app.get('/strings/lower/:name', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.name) });
});

module.exports = app;
