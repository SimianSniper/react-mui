const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  
  // OPTIONAL
  // Reload On File Change
  // watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'inline-source-map'
});
