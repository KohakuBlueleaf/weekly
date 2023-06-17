const db = require('./models');

db.sequelize.sync({force: true})