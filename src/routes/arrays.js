const express = require('express');

const router = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

router.route('/element-at-index/:index').post((req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

router.route('/to-string').post((req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

router.route('/append').post((req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

router.route('/starts-with-vowel').post((req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

router.route('/remove-element').post((req, res) => {
  const index = req.query.index || 0;
  res.status(200).json({ result: removeNthElement2(index, req.body.array) });
});

module.exports = router;
