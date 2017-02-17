var webpackStrip = require("strip-loader");
var config = require("./webpack.config.js");

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exlude: /node_modules/,
    loader: webpackStrip.loader("console.log")
};

config.module.loaders.push(stripLoader);

module.exports = config;