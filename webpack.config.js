var extractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/css/index.css",
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractTextWebpackPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new extractTextWebpackPlugin("./static/css/[name].css")
    ]
}
