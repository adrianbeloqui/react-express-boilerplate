const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
    app: './server.js',
  },
  target: 'node',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules|src/,
        loader: 'babel-loader'
      }
    ]
  },
  resolveLoader: {
      modules: [
          path.resolve(__dirname, 'node_modules')
      ]
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ]
};