const express = require('express');

const router = express.Router();

const { add, multiply, subtract, divide, remainder } = require('../lib/numbers');

router.route('/add/:a/and/:b').get((req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

router.route('/subtract/:b/from/:a').get((req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(a, b) });
});

router.route('/multiply').post((req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

router.route('/divide').post((req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

router.route('/remainder').post((req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

module.exports = router;
