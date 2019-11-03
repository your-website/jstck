const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // добавили плагин
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин
const isDev = process.env.NODE_ENV === 'development';
// создаем переменную для development-сборки

const main = {
    entry: { 
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                        'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                        {
                            loader: 'image-webpack-loader',
                            options: { }
                        },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor[name].[ext]'
                // вместо vendor поставил fonts
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // 
            filename: 'style.[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
    ]
};

const login = {
    entry: { 
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                        'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                        {
                            loader: 'image-webpack-loader',
                            options: { }
                        },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor[name].[ext]'
                // вместо vendor поставил fonts
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // 
            filename: 'login.[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/login.html',
            filename: 'login.html'
        }),
        new WebpackMd5Hash()
    ]
};

const registration = {
    entry: { 
        registration: './src/registration.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                        'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                        {
                            loader: 'image-webpack-loader',
                            options: { }
                        },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor[name].[ext]'
                // вместо vendor поставил fonts
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // 
            filename: 'registration.[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/registration.html',
            filename: 'registration.html'
        }),
        new WebpackMd5Hash()
    ]
};

module.exports = [main, login, registration];