
const express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', (req, res) => {

  console.warn(aa)
  res.send('test1');
});

router.get('/test1', (req, res) => {

  res.send({
    test1: 'test1'
  });
});
