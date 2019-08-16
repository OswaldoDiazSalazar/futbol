const path = require('path');
const Dotenv = require('dotenv-webpack');
const Htmlwebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new Dotenv(), new Htmlwebpackplugin({
    template: './src/index.html' }),
    new MiniCssExtractPlugin()
  ],
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
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
};
