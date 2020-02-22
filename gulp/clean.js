"use strict";

const del = require("del");
const config = require("./config");

function clean() {
  return del([config.paths.pages.dest]);
}

exports.clean = clean;
