/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const environment = process.env.NODE_ENV;
const isProd = environment === 'production';

// Rules need to be moved into tasks but cannot resolve node_modules
const jsRules = {
  test: /\.(js|jsx)$/,
  include: path.join(__dirname, 'app'),
  exclude: /node_modules/,
  use: ['babel-loader', 'eslint-loader']
}

const styleRules = {
  test: /\.(sass|scss)$/,
  use: ExtractTextPlugin.extract(
    ['css-loader', 'postcss-loader']
  )
}

var webpackRules = [jsRules, styleRules];
var webpackOutput = require('./webpackTasks/output.js')(path, environment);
var webpackPlugins = require('./webpackTasks/plugins.js')(environment, isProd, webpack, ExtractTextPlugin);
var webpackDevServer = require('./webpackTasks/devServer.js')();

const config = {
  entry: './app/main.js',
  output: webpackOutput,
  module: {
    rules: webpackRules
  },
  devtool: 'source-map',
  devServer: webpackDevServer,
  plugins: webpackPlugins
};

module.exports = config;
