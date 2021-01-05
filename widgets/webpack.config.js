  
const path = require("path");

module.exports = {
    entry: "./widgets.jsx",
    output: {
        // path: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
}