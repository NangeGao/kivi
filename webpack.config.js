module.exports = {
    entry: "./src/css/index.css",
    output: {
        path: "./static/css/",
        filename: "bundle.css"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
