const { data } = require('autoprefixer');
const database = require('./index');

(async () => {
  const jane = await database.User.create({
    username: 'jane',
    uid: '12387412'
  });
  console.log(jane)
  const event_test = await database.Event.create({
    title: 'test',
    ownerId: jane.id
  })
  const tag_test = await database.Tag.create({
    name: 'test',
    ownerId: jane.id
  })
  const associateEventTag = await database.Event_Tag.create({
    EventId: event_test.id,
    TagId: tag_test.id
  })
  
  let users = await database.User.findAll({
    include: [
      { model: database.Event, as: 'events' },
      { model: database.Tag, as: 'tags' }
    ]
  });
  users.forEach(element => {
    console.log(element);
  });
  
  let events = await database.Event.findAll({
    include: [
      { model: database.Tag, as: 'tags'},
      { model: database.User, as: 'owner' }
    ]
  })
  events.forEach(element => {
    console.log(element);
  })
  // setTimeout(() => {
    
  // }, 1000)
})();