const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/event 路由
router.get('/', async (req, res) => {
  let user = req.userData;
  let eventData = database.Event.findAll({
    include: [
      {
        model: database.User,
        as: 'owner',
        where: {id: user.id}
      },
      { model: database.Tag, as: 'tags'},
    ]
  })
  console.log(user, eventData)
  
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
      location: e.location,
      date: e.date
    })
  })
  res.json(processedData);
});

router.post('/', async (req, res) => {
  let user = req.userData;
  console.log(req.body, user);
  res.json({
    'status': 'ok',
  })
})

module.exports = router;