const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/todo 路由
router.get('/', async (req, res) => {
  console.log('GET /api/todo')
  let user = req.userData;
  let todoData = await database.Todo.findAll({
    include: [
      {
        model: database.User,
        as: 'owner',
        where: {id: user.id}
      },
      { model: database.Tag, as: 'tags'},
    ]
  })
  let processedData = [];
  todoData.forEach((e) => {
    processedData.push({
      id: e.id,
      content: e.type,
      completed: e.completed,
      year: e.year,
      month: e.month,
      day: e.day,
      week: e.weekday,
    })
  })
  console.log('get', processedData)
  res.json(processedData);
});

router.post('/', async (req, res) => {
  let user = req.userData;
  console.log('POST', req.body, user);
  let todo = await database.Todo.create({
    content: req.body.type,
    completed: req.body.completed,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    weekday: req.body.week,
    ownerId: user.id
  })
  res.json({
    'status': 'ok',
  })
})

module.exports = router;