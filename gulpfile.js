const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const del = require("del");
const eslint = require("gulp-eslint");
// css
const sass = require('gulp-sass');
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require('gulp-sourcemaps');
// images
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
// html
const htmlmin = require('gulp-htmlmin');
// webpack
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");


const paths = {
  styles: {
    src: "./src/scss/**/*.scss",
    dest: "dist/css"
  },
  images: {
      src: "./src/img/**/*.+(png|jpg|jpeg|gif|svg)",
      dest: "dist/img"
  },
  scripts: {
      src: "./src/js/**/*.js",
      dest: "dist/js"
  },
  pages: {
      src: "./src/html/**/*.html",
      dest: "./dist"
  }
}

// Clean
function clean() {
  return del([paths.pages.dest]);
}

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: paths.pages.dest
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// HTML
function html() {
  return gulp.src(paths.pages.src)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.pages.dest));
}

// CSS
function css() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
}

// JS - Lint
function scriptsLint() {
  return gulp
    .src([paths.scripts.src, "./gulpfile.js"])
    .pipe(plumber())
    .pipe(eslint({fix: true}))
    .pipe(eslint.format());
    //.pipe(eslint.failAfterError());
} 

// JS - Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src([paths.scripts.src])
      .pipe(webpackstream(webpackconfig, webpack))
      .pipe(plumber())
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest(paths.scripts.dest))
      .pipe(browsersync.stream())
  );
}

// Optimize images
function images() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest(paths.images.dest))
}

// Watch files
function watchFiles() {
  gulp.watch(paths.pages.src, gulp.series(html, browserSyncReload));
  gulp.watch(paths.styles.src, css);
  gulp.watch([paths.scripts.src, './gulpfile.js'], gulp.series(scriptsLint, scripts));
  gulp.watch(paths.images.src, gulp.series(images, browserSyncReload));
}

// Define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(html, css, js, images));
const watch = gulp.parallel(watchFiles, browserSync);

// Export tasks
exports.images = images;
exports.html = html;
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.dev = watch;
exports.default = build;
