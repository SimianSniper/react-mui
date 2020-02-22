"use strict";

const merge = require('lodash/merge');
const minimist = require('minimist')(process.argv);
const env = minimist.env || 'production'

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
  default: {
    apiHost: ''
  },
  development: {
    apiHost: 'http://localhost:9050'
  },
  staging: {
    apiHost: ''
  },
  production: {
    apiHost: ''
  }
};

var run = {
  default: {
    js: {
      uglify: false
    },
    css: {
      cssnano: false
    }
  },
  development: {
    js: {
      uglify: false
    },
    css: {
      cssnano: false
    }
  },
  staging: {
    js: {
      uglify: true
    },
    css: {
      cssnano: true
    }
  },
  production: {
    js: {
      uglify: true
    },
    css: {
      cssnano: true
    }
  }
};

/** makes gulp task dynamic by allowing you to pass in different options to the plugins, 
 * allowing different options per environment, per plugin.
 * Code stays DRY because you don’t need to create duplicate tasks per environment. 
 * Simply alter the config objects that get passed into the plugins: */
var plugin = {
  default: {
    js: {
      uglify: {
        mangle: true
      }
    }
  },
  development: {
    js: {
      uglify: {
        mangle: false
      }
    }
  },
  staging: {
    js: {
      uglify: {
        mangle: true
      }
    }
  },
  production: {
    js: {
      uglify: {
        mangle: true
      }
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
