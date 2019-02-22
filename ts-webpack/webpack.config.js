const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      title: 'ts-webpack',
      template: 'src/index.template.html',
      files: {
        "css": [ "./styles.css" ],
      }
    })
  ]
};