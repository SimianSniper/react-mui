"use strict";

const gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'),
noop = require('gulp-noop'),
config = require("./config");

function html(done) {
  gulp.src(config.paths.pages.src)
  .pipe(config.run.html.htmlmin ? htmlmin(config.plugin.html.htmlmin) : noop())
  .pipe(gulp.dest(config.paths.pages.dest));
  done();
}

exports.html = html;
