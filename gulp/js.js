"use strict";

//const stripDebug = require('gulp-strip-debug');
const gulp = require('gulp'),
browsersync = require("browser-sync").get('syncServer1'),
eslint = require("gulp-eslint"),
plumber = require("gulp-plumber"),
minimist = require('minimist')(process.argv),
webpack = require("webpack"),
webpackstream = require("webpack-stream"),
config = require("./config"),
webpackConfig = minimist.env === 'production' ? 
  require("../webpack/webpack.config.prod") : require("../webpack/webpack.config.dev");

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
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
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
