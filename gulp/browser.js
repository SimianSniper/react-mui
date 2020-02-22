"use strict";

const browsersync = require('browser-sync').create('syncServer1');
const config = require("./config");

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: config.paths.pages.dest
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

exports.browserSync = browserSync;
exports.browserSyncReload = browserSyncReload;
