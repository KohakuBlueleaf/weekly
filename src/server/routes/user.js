const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/user 路由
router.get('/', async (req, res) => {
  let user = req.userData;
  console.log(new Date().toISOString(), ":", `${user.uid}:${user.username}`, "has logged in");
  res.json({ message: 'Welcome to the user API!' });
});


module.exports = router;