const express = require('express');
const path = require('path');
const app = express();

const userHandler = require('./middleware/user-login');
const errorHandler = require('./middleware/error-handler');
const requestLogger = require('./middleware/request-logger');
const accessController = require('./middleware/access-controller');

app.use(express.json());
app.use(errorHandler);
app.use(accessController);
app.use(userHandler);
if(process.env.NODE_ENV === 'development') {
  app.use(requestLogger);
}


// 設定靜態檔案的路徑
app.use(express.static(path.resolve(__dirname, '../../public')));

// 設定伺服器路由
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const tagsRoutes = require('./routes/tags');
const todoRoutes = require('./routes/todo');
app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/tag', tagsRoutes);
app.use('/api/todo', todoRoutes);

module.exports = app;