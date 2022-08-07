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

module.exports = router;
