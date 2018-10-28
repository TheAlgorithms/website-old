const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

const webpack = require('webpack');


const SOURCE = path.join(__dirname, 'src');

module.exports = {
  entry: [
    path.join(SOURCE, 'scripts', 'index.jsx'),
    path.join(SOURCE, 'styles', 'index.scss'),
  ],
  mode: 'development',
  plugins: [
    new HTMLPlugin({ template: path.join(SOURCE, 'index.html') }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    contentBase: SOURCE,
    port: process.env.PORT || 9080,
  },
  resolve: { extensions: ['.js', '.jsx', '.scss'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['@babel/react'] },
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
};
