var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackAssetsManifest = require('webpack-assets-manifest');

var config = require('./../config');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: path.join(config.srcDir, 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: config.distDir,
        publicPath: '/'
    },
    resolve: {
        modules: [
            'node_modules',
            config.srcDir
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new HtmlWebpackPlugin({
            template: config.srcHtmlLayout
        }),
        //new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: config.srcDir,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            // Modular Styles
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' }
                ],
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ],
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            // Global Styles
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                include: [path.resolve(config.srcDir, 'styles')]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                include: [path.resolve(config.srcDir, 'styles')]
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: config.serveDir,
        compress: true,
        historyApiFallback: {
            index: '/'
        },
        port: 4000
    }
}