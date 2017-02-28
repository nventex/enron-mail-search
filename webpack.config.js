var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    context: path.resolve("src"), //Find entry files in this path...
    entry: [
        path.resolve(__dirname, "src/index")
    ],
    target: "web",
    watch: true,
    output: {
        path: path.join(__dirname, "dist"), //Production builds put files here...
        publicPath: "/", //Dev server"s asset path, should match those in index.html...
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true, //Needs to be enabled when using browserHistory and webpack dev server...
        contentBase: "./src"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./index.html", to: "./index.html" },
            { from: "./assets/**/*" }
        ])
    ],    
    module: {
        preLoaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, "src"), loaders: ["babel"] },
            { test: /\.css$/, loaders: ["style", "css"], exclude: /flexboxgrid/ },
            { test: /\.css$/, loader: "style!css?modules", include: /flexboxgrid/ },
            { test: /\.less$/, loaders: ["style", "css", "less"] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2|png)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};