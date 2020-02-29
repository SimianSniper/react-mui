module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": ["error", "windows"], 
    "no-console": "off",
    //"no-alert": "off",
    //"no-debugger": "off",
    "react/jsx-filename-extension":[0],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["./gulpfile.js", "./gulp/**/*.js", "./webpack/**/*.js"]}]
    //"no-unused-vars": [0]
  }
};
