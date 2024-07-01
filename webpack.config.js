const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { type } = require('os')
const { watchFile } = require('fs')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        watchFiles: ['src/*.html'],
        // port: 3000,
        open: true,
        hot: true,
        // compress: true,
        // historyApiFallback: true,
    },
    module: {
        rules: [
            // Use of CSS
            {
                test:/\.css$/,
                use: ['style-loader','css-loader',],
            },
            // Use of PNGs
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // Use custom fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
};
