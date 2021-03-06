const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const UglifyJsPlugin = require ('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin( {sourceMap: true} ),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Journal',
      template: './src/html/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
