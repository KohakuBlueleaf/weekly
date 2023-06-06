const express = require('express');
const path = require('path');
const app = express();

const userHandler = require('./middleware/user-login');
const errorHandler = require('./middleware/error-handler');
const requestLogger = require('./middleware/request-logger');
const accessController = require('./middleware/access-controller');

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
app.use('/api/user', userRoutes);

module.exports = app;