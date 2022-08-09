const express = require('express');

const router = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

router.route('/negate').post((req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

router.route('/truthiness').post((req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
});

router.route('/is-odd/:a').get((req, res) => {
  const a = parseInt(req.params.a);
  if (Number.isNaN(a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(a) });
  }
});

router.route('/:string/starts-with/:character').get((req, res) => {
  if (req.params.character.length !== 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
  }
});

module.exports = router;
