const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");
const express = require('express');
const router = express.Router();


// 處理 GET /api/user 路由
router.get('/', async (req, res) => {
  let idToken = req.get("idToken");
  let payload = (await awsUtils.verifyToken(idToken));
  
  let checksum = payload.aud;
  if(checksum != awsUtils.cliId){
    res.json({message: 'Invalid Login Token'})
    return
  }
  
  let uid = payload.sub;
  let username = payload['cognito:username'];
  let email = payload.email;
  
  let user = await database.User.findOne({
    where: {
      uid: uid,
    }
  })
  if(user == null){
    user = await database.User.create({
      uid: uid, 
      username: username,
      email: email
    });
  }
  let posts = await database.Post.findAll({
    where: {
      userId: user.id
    }
  })
  console.log(posts)
  console.log(new Date().toISOString(), ":", `${user.uid}:${user.username}`, "has logged in");
  res.json({ message: 'Welcome to the user API!' });
});


module.exports = router;