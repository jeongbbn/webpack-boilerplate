const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  devtool: "source-map", //크롬에서 디버깅 가능하도록 원본코드같이 bundle
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
          },
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, //scss,sass,css templating
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      // { 오히려 file-loader를 지워야 이미지가 적용된다...!?
      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   use: ['file-loader'],
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],

};