"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require("browser-sync").get('syncServer1');
const config = require("./config");

function css() {
  return gulp
    .src(config.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest(config.paths.styles.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.styles.dest))
    .pipe(browsersync.stream());
}

exports.css = css;
