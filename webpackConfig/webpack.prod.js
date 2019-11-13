const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(common, {
  mode: 'production',
  // mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
  },
})