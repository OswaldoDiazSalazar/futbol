const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.[hash].js',
  },
  mode: 'production',
});
