const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['build/dist']),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([{
      from: 'assets/',
      to: path.resolve(__dirname, 'images/')
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/dist'),
    library: 'CountDown',
    libraryExport: 'default'
  },
});