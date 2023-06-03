const database = require('../database');
const express = require('express');
const router = express.Router();

// 處理 GET /api/chat 路由
router.get('/', (req, res) => {
  console.log(req, res);
  res.json({ message: 'Welcome to the chat API!' });
});

// 處理 POST /api/chat 路由
router.post('/', (req, res) => {
  console.log(req, res);
  const { message } = req.body;
  // 在這裡處理收到的訊息
  res.json({ message: 'Message received!' });
});

module.exports = router;