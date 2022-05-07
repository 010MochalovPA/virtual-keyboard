const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js',
    clean: {
      keep(asset) {
        return asset.includes('.git');
      },
    },
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: "virtual-keyboard",
      filename: './index.html',
      template: 'index.html',
      minify: false,
    }),
    new ESLintPlugin({
      fix: true
    }), 
  ],
  module:{
    rules:[
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },
  devServer:{
    static: '/Projects2022Q1/virtual-keyboard/app'
  }
};