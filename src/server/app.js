const express = require('express');
const path = require('path');
const app = express();

// 設定靜態檔案的路徑
app.use(express.static(path.resolve(__dirname, '../../public')));

// 設定伺服器路由
const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);

module.exports = app;