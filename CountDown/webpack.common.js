const path = require('path'),
  join = path.join,
  resolve = path.resolve;
const root = resolve(__dirname);
const utils = join(root, 'src/utils');
const assets = join(root, 'src/assets');

module.exports = {
  entry: {
    index: './a.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      use:[{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "autoprefixer-loader"
        }, {
          loader: "stylus-loader" // 将 stylus 编译成 CSS
        }]
    }, {
      test: /\.(jpg|png)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        },
      ]
    }]
  },
  resolve: {
    alias: {
      utils,
      assets,
    }
  }
};
