const path = require('path');

module.exports = {

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/js'), // dealt with by gulp
  }

}
