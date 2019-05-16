const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const _u = require('../util.js');

router.post('/', function(req, res) {
  res.json({
    message: 'Check Post Server Connected',
    user: req.user
  });
});

module.exports = router;
