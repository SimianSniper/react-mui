const gulp = require('gulp'),
noop = require('gulp-noop'),
browsersync = require("browser-sync").get('syncServer1'),
eslint = require("gulp-eslint"),
plumber = require("gulp-plumber"),
minimist = require('minimist')(process.argv),
webpack = require("webpack"),
webpackstream = require("webpack-stream"),
config = require('./config'),
webpackConfig = minimist.env === 'production' ? 
  require('../webpack/webpack.config.prod') : require('../webpack/webpack.config.dev');
//const stripDebug = require('gulp-strip-debug');

function scriptsLint() {
  return gulp
    .src([
      config.paths.scripts.src, 
      config.paths.gulpfile,
      config.paths.gulptasks,
      config.paths.lintfile,
      config.paths.webpack
    ])
    //.pipe(stripDebug())
    .pipe(plumber())
    .pipe(config.run.js.lint ? eslint(config.plugin.js.lint) : noop())
    .pipe(config.run.js.lintFormat ? eslint.format(config.plugin.js.lintFormat) : noop())
    .pipe(config.run.js.lintFail ? eslint.failAfterError(config.plugin.js.lintFail) : noop());
} 

function scripts() {
  return (
    gulp
      .src([config.paths.scripts.src])
      .pipe(webpackstream(webpackConfig, webpack))
      .pipe(plumber())
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest(config.paths.scripts.dest))
      .pipe(browsersync.stream())
  );
}

exports.scripts = scripts;
exports.scriptsLint = scriptsLint;
