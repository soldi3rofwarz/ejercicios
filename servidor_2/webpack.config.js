const path = require('path');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin'); 

module.exports={
    entry: './src/frontend/index.js',
    output:{
        path:path.resolve(__dirname,'app_compilada'),
        filemane:'bundle.js',
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
            rules:[{
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                },
            },
            {
                test:/\.html$/,
                use: {
                    loader:'html-loader',
                },
            },
            {
                test:/\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test:/\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader', 
                    
                        options:{
                    
                            name:'assets/resources/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html',
        }),

        new MiniCssExtractPlugin({
            filename:'assets/app.css',
        }),
    ],
};