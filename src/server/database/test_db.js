const database = require('./index');

(async () => {
  // const jane = await database.User.create({
  //   username: 'jane',
  //   uid: '12387412'
  // });
  // console.log(jane)
  
  let users = await database.User.findAll();
  users.forEach(element => {
    console.log(element.id, element.username, element.uid);
  });
})();