const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index-bundle.js",
    path: path.resolve(__dirname, 'build'),
    // publicPath: 'https://a-yamorzhina.github.io/react-new-social'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [["@babel/plugin-proposal-class-properties", { "loose": true }]],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                compileType: 'module',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            }
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]},
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ]
};
