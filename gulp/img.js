"use strict";

const gulp = require('gulp'),
noop = require('gulp-noop'),
newer = require('gulp-newer'),
imagemin = require('gulp-imagemin'),
config = require("./config");

function images() {
  return gulp
    .src(config.paths.images.src)
    .pipe(newer(config.paths.images.dest))
    .pipe(
      config.run.img.imagemin ? imagemin([
        imagemin.gifsicle(config.plugin.img.imagemin.gifsicle),
        imagemin.jpegtran(config.plugin.img.imagemin.jpegtran),
        imagemin.optipng(config.plugin.img.imagemin.optipng),
        imagemin.svgo(config.plugin.img.imagemin.svgo)
      ]) : noop()
    )
    .pipe(gulp.dest(config.paths.images.dest))
}

exports.images = images;
