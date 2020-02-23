"use strict";

const gulp = require('gulp'),
noop = require('gulp-noop'),
sass = require('gulp-sass'),
plumber = require("gulp-plumber"),
rename = require("gulp-rename"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
sourcemaps = require('gulp-sourcemaps'),
browsersync = require("browser-sync").get('syncServer1'),
config = require("./config"),
postCssConfig = [];
if (config.run.css.autoprefixer) { postCssConfig.push(autoprefixer()) };
if (config.run.css.cssnano) { postCssConfig.push(cssnano()) };

function css() {
  return gulp
    .src(config.paths.styles.src)
    .pipe(config.run.css.sourcemaps ? sourcemaps.init() : noop())
    .pipe(plumber())
    .pipe(config.run.css.sass ? sass(config.plugin.css.sass) : noop())
    .pipe(gulp.dest(config.paths.styles.dest))
    .pipe(config.run.css.rename ? rename(config.plugin.css.rename) : noop())
    .pipe(config.run.css.postcss ? postcss(postCssConfig) : noop())
    .pipe(config.run.css.sourcemaps ? sourcemaps.write() : noop())
    .pipe(gulp.dest(config.paths.styles.dest))
    .pipe(browsersync.stream());
}

exports.css = css;
