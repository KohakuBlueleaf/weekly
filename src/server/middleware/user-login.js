const database = require('../database');
const { Op } = require("sequelize");
const awsUtils = require("../utils/aws");


module.exports = async function (req, res, next) {
  let idToken = req.get("idToken");
  if(idToken != undefined){
    let payload = (await awsUtils.verifyToken(idToken));
    if(payload == undefined ||payload.aud != awsUtils.cliId){
      res.json({message: 'Invalid Login Token'})
      return
    }
    
    let uid = payload.sub;
    let username = payload['cognito:username'];
    let email = payload.email;
    let user = await database.User.findOrCreate({
      where: {
        uid: uid,
      },
      defaults: {
        uid: uid, 
        username: username,
        email: email,
        memo: '',
      }
    })
    req.userData = user[0];
  }else{
    res.json({message: 'missing login token'})
  }
  next();
};
