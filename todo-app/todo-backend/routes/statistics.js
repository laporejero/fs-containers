const express = require('express');
const redis = require('../redis');

const router = express.Router();

router.get('/', async (_, res) => {
  const count = await redis.get('added_todos');

  res.send({
    added_todos: Number(count || 0)
  });
});

module.exports = router;
