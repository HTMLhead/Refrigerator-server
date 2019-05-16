const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({
    message: 'Check Get Method',
    user: req.user
  });
});

module.exports = router;
