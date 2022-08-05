const express = require('express');

const router = express.Router();

const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

router.route('/hello/:name').get((req, res) => {
  res.status(200).json({ result: sayHello(req.params.name) });
});

router.route('/upper/:string').get((req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

router.route('/lower/:string').get((req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

router.route('/first-characters/:string').get((req, res) => {
  const length = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(req.params.string, length) });
});

module.exports = router;
