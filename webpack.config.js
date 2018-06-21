
const path = require('path');

module.exports = {
  entry:{
    lesson1:'./app/lesson1.js',
    operators:'./app/operators.js',
    test:'./app/operators/test.js',
    subjects:'./app/subjects.js',
    chat:'./app/chat.js',
    maps:'./app/operators/maps.js',
    githubApp:"./app/githubApp.js"
  } ,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};