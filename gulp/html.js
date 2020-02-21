"use strict";

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const config = require("./config");

function html(done) {
  gulp.src(config.paths.pages.src)
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest(config.paths.pages.dest));
  done();
}

exports.html = html;
