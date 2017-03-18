var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    context: path.resolve("src"), //Find entry files in this path...
    entry: [
        path.resolve(__dirname, "src/index")
    ],
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
            { from: "./robots.txt", to: "./robots.txt" },
            { from: "./assets/**/*" }
        ]),

        // Make sure this plugin is defined last...
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development"),
                "API_URL": JSON.stringify("http://localhost:3000/api")
            }
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "eslint-loader", enforce: "pre" },
            { test: /\.js$/, include: path.join(__dirname, "src"), use: ["babel-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"], exclude: /flexboxgrid/ },
            { test: /\.css$/, use: ["style-loader", "css-loader?modules"], include: /flexboxgrid/ },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" },
            { test: /\.(woff|woff2|png)$/, use: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};