"use strict";

module.exports = {
    entry: "./webstatic/app/finance/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            }
        ]
    }
};
