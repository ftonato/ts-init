const path = require('path');

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.ts|\.tsx$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
