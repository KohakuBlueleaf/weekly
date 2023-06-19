const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/tag 路由
router.get('/', async (req, res) => {
  console.log('GET /api/tag')
  let user = req.userData;
  let tagData = await database.Tag.findAll({
    include: [
      {
        model: database.User,
        as: 'owner',
        where: {id: user.id}
      },
    ]
  })
  let processedData = [];
  tagData.forEach((e) => {
    processedData.push({
      id: e.id,
      title: e.name,
      color: e.color,
    })
  })
  console.log('get', processedData)
  res.json(processedData);
});

router.post('/', async (req, res) => {
  let user = req.userData;
  console.log('POST', req.body, user);
  let tag = await database.Tag.create({
    name: req.body.title,
    color: req.body.color,
    ownerId: user.id
  })
  res.json({
    'status': 'ok',
  })
})

module.exports = router;