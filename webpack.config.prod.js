const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.[hash].js',
  },
  mode: 'production',
});
