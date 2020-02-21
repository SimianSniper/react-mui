"use strict";

const { watch, series, parallel } = require( 'gulp' ),
t = require('require-dir')('./gulp', {recurse: true}),
config = require("./gulp/config");

// Watch files
function watchFiles() {
  watch(config.paths.pages.src, series(t.html.html, t.browser.browserSyncReload));
  watch(config.paths.styles.src, t.css.css, t.browser.browserSyncReload);
  watch([config.paths.scripts.src, './gulpfile.js'], series(t.js.scriptsLint, t.js.scripts));
  watch(config.paths.images.src, series(t.img.images, t.browser.browserSyncReload));
}

// Define tasks
const js = series(t.js.scriptsLint, t.js.scripts);
const watcher = parallel(watchFiles, t.browser.browserSync);
const build = series(t.clean.clean, parallel(t.html.html, t.css.css, js, t.img.images));

// Export tasks
exports.images = t.img.images;
exports.html = t.html.html;
exports.css = t.css.css;
exports.clean = t.clean.clean;
exports.js = js;
exports.watch = watcher;
exports.build = build;
exports.default = build;
