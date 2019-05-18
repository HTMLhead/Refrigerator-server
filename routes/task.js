const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const _u = require('../util.js');

router.post('/init', async (req, res) => {
  try {
    const query = { code: req.body.code };
    _u.findAndSendByRequest(Task, query, 'tasks', res);
  } catch (err) {
    res.send(err.message);
  }
});

router.post('/update', async (req, res) => {
  try {
    const query = { code: req.body.code };
    const updatedData = { tasks: req.body.tasks };
    _u.findAndUpdateByRequest(Task, query, updatedData, 'tasks', res);
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = router;
