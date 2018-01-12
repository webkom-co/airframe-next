var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackAssetsManifest = require('webpack-assets-manifest');
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = require('./../config');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: ['react-hot-loader/patch', path.join(config.srcDir, 'index.js')]
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
            template: config.srcHtmlLayout,
            inject: false
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractCssChunks(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin()
        /*
            new WebpackAssetsManifest({
                writeToDisk: true,
                output: path.join(config.distDir, config.clientManifestFile),
                sortManifest: function(name) {
                    return name.indexOf('common.') === 0 ? 0 : 1;
                }
            }),
        */
        /*
            new StatsPlugin(path.join(config.distDir, config.clientStatsFile), {
                chunkModules: true,
                exclude: [/node_modules/]
            })
        */
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
                use: ExtractCssChunks.extract({
                    use: [
                        { 
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                                minimize: true
                            }
                        },
                        { loader: 'postcss-loader' }
                    ]
                }),
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            {
                test: /\.scss$/,
                use: ExtractCssChunks.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                                minimize: true
                            }
                        },
                        { loader: 'postcss-loader' },
                        { loader: 'sass-loader' }
                    ]
                }),
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            // Global Styles
            {
                test: /\.css$/,
                use: ExtractCssChunks.extract({
                    use: [ 
                        { 
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        { loader: 'postcss-loader' }
                    ]
                }),
                include: [path.resolve(config.srcDir, 'styles')]
            },
            {
                test: /\.scss$/,
                use: ExtractCssChunks.extract({
                    use: [
                        { 
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }, 
                        { loader: 'postcss-loader' }, 
                        { loader: 'sass-loader' }
                    ]
                }),
                include: [path.resolve(config.srcDir, 'styles')]
            },
            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                }
            },
            // Files
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "static/[name].[ext]",
                }
            }
        ]
    }
}