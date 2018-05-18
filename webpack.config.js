const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var proxy = require('http-proxy-middleware');
const theme = require('./package.json').theme;
const path = require("path")

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 9001,
        // proxy反向代理配置
        host: 'localhost',
        proxy: [
            {
                context: `/*`,
                target: '192.168.1.1',
                changeOrigin: true,
                secure: false
            }
        ]
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {loader: 'less-loader', options: {modifyVars: theme}},
                ],
                include: [/node_modules/,path.resolve(__dirname,"src")]
            },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules&localIdentName=[name]-[local]', 'postcss-loader', 'sass-loader'] },
            { test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf|svg)/,
                loader: 'file-loader?name=./font/[name].[ext]'
            },
            {
                test: /\.svg/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon:'./public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // 启动压缩
        // new UglifyJsPlugin()
    ]
};
