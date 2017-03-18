var webpackStrip = require("strip-loader");
var config = require("./webpack.config.js");
var webpack = require("webpack");

config.watch = false;

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: webpackStrip.loader("console.log")
};

var productionPlugin = 
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production"),
            "API_URL": JSON.stringify("https://enron-mail-proxy.herokuapp.com/api")
        }
    });

config.module.rules.push(stripLoader);
config.plugins.pop();
config.plugins.push(productionPlugin);

module.exports = config;