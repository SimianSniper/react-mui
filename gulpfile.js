"use strict";

const { watch, series, parallel } = require('gulp'),
t = require('require-dir')('./gulp'),
config = require("./gulp/config");

function watchFiles() {
  watch(config.paths.pages.src, series(t.html.html, t.browser.browserSyncReload));
  watch(config.paths.images.src, series(t.img.images, t.browser.browserSyncReload));
  watch(config.paths.styles.src, t.css.css);
  watch(config.paths.scripts.src, series(t.js.scriptsLint, t.js.scripts));
  watch([
    config.paths.gulpfile,
    config.paths.gulptasks,
    config.paths.webpack,
    config.paths.lintfile
  ], t.js.scriptsLint);
}

const js = series(t.js.scriptsLint, t.js.scripts);
const watcher = parallel(watchFiles, t.browser.browserSync);
const build = series(t.clean.clean, parallel(t.html.html, t.css.css, js, t.img.images));

exports.images = t.img.images;
exports.html = t.html.html;
exports.css = t.css.css;
exports.clean = t.clean.clean;
exports.js = js;
exports.watch = watcher;
exports.build = build;
exports.default = build;
