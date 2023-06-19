const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/event 路由
router.get('/', async (req, res) => {
  console.log('GET /api/event')
  let user = req.userData;
  let eventData = await database.Event.findAll({
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
  eventData.forEach((e) => {
    processedData.push({
      id: e.id,
      type: e.type,
      title: e.title,
      year: e.year,
      month: e.month,
      day: e.day,
      week: e.weekday,
      timeStart: e.timeStart,
      timeEnd: e.timeEnd,
      tags: e.tags,
      location: e.location
    })
  })
  console.log('get', processedData)
  res.json(processedData);
});

router.post('/', async (req, res) => {
  let user = req.userData;
  console.log('POST', req.body, user);
  let event = await database.Event.create({
    type: req.body.type,
    title: req.body.title,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    weekday: req.body.weekday,
    timeStart: req.body.timeStart,
    timeEnd: req.body.timeEnd,
    tags: req.body.tags,
    location: req.body.location,
    ownerId: user.id
  })
  res.json({
    'status': 'ok',
  })
})

module.exports = router;