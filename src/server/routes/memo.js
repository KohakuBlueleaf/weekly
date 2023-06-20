const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/memo 路由
router.get('/', async (req, res) => {
  let user = req.userData;
  console.log('GET /api/memo', user.memo, user)
  res.json({
    value: user.memo
  })
});

router.post('/', async (req, res) => {
  let user = req.userData;
  await database.User.update({
    memo: req.body.value
  },{
    where: {
      id: user.id
    }
  })
  res.json({
    'status': 'ok',
  })
})

module.exports = router;