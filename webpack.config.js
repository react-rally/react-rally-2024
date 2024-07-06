const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "index.html",
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: "assets/img", to: "assets/img" },
      { from: "docs", to: "docs" },
    ],
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  );
}

module.exports = {
  entry: ["./index.js"],
  output: {
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV ?? "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\/api\//,
        use: "json-loader",
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  resolve: {
    modules: ["app", "node_modules"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: plugins,
};
