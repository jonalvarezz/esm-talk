// webpack.config.js
// Enable AMD/CommonJS imports and ES6 Syntax
var path = require('path')

module.exports = {
  entry: path.resolve('src', 'app.js'),
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
       "test": /\.js?$/,
       "exclude": /node_modules/,
       "loader": "babel-loader"
      }
    ]
  }
}
