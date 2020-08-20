const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     // style-loader
      //     { loader: 'style-loader' },
      //     // css-loader
      //     {
      //       loader: 'css-loader',
      //       modules: {
      //         mode: 'local',
      //         localIdentName: "[name]__[local]___[hash:base64:5]"
      //       },
      //       import: true,
      //       importLoaders: true,
      //     },
      //     // sass-loader
      //     { loader: 'sass-loader' }
      //   ]
      // }

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    [
      "css-modules-transform", {
      "append": [
        "npm-module-name",
        "./path/to/module-exporting-a-function.js"
      ],
      "camelCase": false,
      "createImportedName": "npm-module-name",
      "createImportedName": "./path/to/module-exporting-a-function.js",
      "devMode": false,
      "extensions": [".css", ".scss", ".less"], // list extensions to process; defaults to .css
      "generateScopedName": "[name]__[local]___[hash:base64:5]", // in case you don't want to use a function
      "generateScopedName": "./path/to/module-exporting-a-function.js", // in case you want to use a function
      "generateScopedName": "npm-module-name",
      "hashPrefix": "string",
      "ignore": "*css",
      "ignore": "./path/to/module-exporting-a-function-or-regexp.js",
      "preprocessCss": "./path/to/module-exporting-a-function.js",
      "preprocessCss": "npm-module-name",
      "processCss": "./path/to/module-exporting-a-function.js",
      "processCss": "npm-module-name",
      "processorOpts": "npm-module-name",
      "processorOpts": "./path/to/module/exporting-a-plain-object.js",
      "mode": "string",
      "prepend": [
        "npm-module-name",
        "./path/to/module-exporting-a-function.js"
      ],
      "extractCss": "./dist/stylesheets/combined.css"
    }
    ]
    // 'css-modules-transform',
    // {
    //   devMode: false,
    //   extensions: ['.scss'],
    //   generateScopedName: '[local]__[hash:base64:8]',
    //   rootDir: path.resolve(__dirname, '../front')
    // }
  ]
};
