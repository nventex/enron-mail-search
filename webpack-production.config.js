var webpackStrip = require("strip-loader");
var config = require("./webpack.config.js");
var webpack = require("webpack");

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exlude: /node_modules/,
    loader: webpackStrip.loader("console.log")
};

var productionPlugin = 
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production"),
            "API_URL": JSON.stringify("https://enron-mail-proxy.herokuapp.com/api")
        }
    });

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin();

config.module.loaders.push(stripLoader);
config.plugins.pop();
config.plugins.push(productionPlugin);
config.plugins.push(uglifyPlugin);

module.exports = config;