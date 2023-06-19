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
      { model: database.Tag, as: 'tags', through: database.Event_Tag },
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
      tags: e.tags.map((tag) => tag.id),
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
    location: req.body.location,
    ownerId: user.id
  })
  for(let tag of req.body.tags) {
    await database.Event_Tag.create({
      EventId: event.id,
      TagId: tag
    })
  }
  res.json({
    'status': 'ok',
  })
})

module.exports = router;