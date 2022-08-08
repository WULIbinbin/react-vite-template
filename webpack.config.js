const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    port:'8091',
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template:'./index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};