"use strict";

//const merge = require('lodash/merge'),
const merge = require('webpack-merge'),
minimist = require('minimist')(process.argv),
env = minimist.env || 'development';

const paths = {
  gulpfile: './gulpfile.js',
  gulptasks: './gulp/**/*.js',
  lintfile: './.eslintrc.js',
  webpack: './webpack/**/*.js',
  packagejson: './package.json',
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
};

const constants = {
  development: {
    apiHost: ''
  },
  production: {
    apiHost: ''
  }
};

const run = {

  development: {
    js: {
      lint: true,
      lintFormat: true,
      lintFail: false
    },
    html: {
      htmlmin: false
    },
    img: {
      imagemin: false
    },
    css: {
      sourcemaps: true,
      sass: true,
      rename: false,
      postcss: true,
      cssnano: false,
      autoprefixer: true
    }
  },

  production: {
    js: {
      lint: true,
      lintFormat: true,
      lintFail: true
    },
    html: {
      htmlmin: true
    },
    img: {
      imagemin: true
    },
    css: {
      sourcemaps: false,
      sass: true,
      rename: false,
      postcss: true,
      cssnano: true,
      autoprefixer: true
    }
  }
};

const plugin = {
  development: {
    js: {
      lint: { fix: true }
    },
    css: {
      sass: { outputStyle: "expanded" },
    }
  },
  production: {
    js: {
      lint: { fix: true },
    },
    html: {
      htmlmin: {
        collapseWhitespace: true,
        removeComments: true
      }
    },
    img: {
      imagemin: {
        gifsicle: { interlaced: true },
        jpegtran: { progressive: true },
        optipng: { optimizationLevel: 5 },
        svgo: {
          plugins: [{
            removeViewBox: false,
            collapseGroups: true
          }]
        }
      }
    },
    css: {
      sass: { outputStyle: "compressed" },
      rename: { suffix: ".min" }
    }
  }
};

const runOpts = merge({}, run.default, run[env]);
const pluginOpts = merge({}, plugin.default, plugin[env]);
const constantsOpts = merge({}, constants.default, constants[env]);

exports.paths = paths;
exports.constants = constantsOpts;
exports.run = runOpts;
exports.plugin = pluginOpts;
