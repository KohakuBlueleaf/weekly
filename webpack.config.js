const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: './src/client/index.jsx', // 客戶端應用程式的進入點
  output: {
    path: path.resolve(__dirname, 'dist'), // 輸出的檔案目錄
    filename: 'bundle.js', // 輸出的檔案名稱
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 轉譯 JavaScript 和 JSX 檔案
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 使用 Babel 轉譯
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel 預設設定
          },
        },
      },
      { //for import 'xxx.css'
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 處理檔案的副檔名
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/public'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'index.html'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        router: () => 'http://localhost:3000',
        logLevel: 'debug' /*optional*/
      }
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/public", to: "" } //to the dist root directory
      ],
    }),
  ]
};
