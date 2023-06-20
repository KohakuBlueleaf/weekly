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
      { model: database.Tag, as: 'tags', through: database.Todo_Tag },
    ]
  })
  let processedData = [];
  todoData.forEach((e) => {
    processedData.push({
      id: e.id,
      title: e.content,
      completed: e.completed,
      year: e.year,
      month: e.month,
      day: e.day,
      weekday: e.weekday,
      tags: e.tags.map((tag) => tag.id),
    })
  })
  console.log('get', processedData)
  res.json(processedData);
});

router.post('/', async (req, res) => {
  let user = req.userData;
  console.log('POST', req.body, user);
  let todo = await database.Todo.create({
    content: req.body.title,
    completed: req.body.completed,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    weekday: req.body.weekday,
    ownerId: user.id
  })
  for(let tag of req.body.tags) {
    await database.Todo_Tag.create({
      TodoId: todo.id,
      TagId: tag
    })
  }
  res.json({
    'status': 'ok',
  })
})

module.exports = router;