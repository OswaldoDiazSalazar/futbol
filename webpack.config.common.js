const path = require('path');
const Dotenv = require('dotenv-webpack');
const Htmlwebpackplugin = require('html-webpack-plugin');
module.exports = {
  plugins: [new Dotenv(), new Htmlwebpackplugin({
    template: './src/index.html',
  })],
  entry: path.resolve(__dirname, 'src/index.jsx'),
  resolve:
  {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
};
