
const express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', (req, res) => {

  res.send('test');
});

router.get('/test1', (req, res) => {

  res.send({
    test1: 'test1'
  });
});
