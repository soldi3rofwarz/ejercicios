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

    devtool: isProduction
            ? 'hidden-source-map'
            : 'cheap-source-map',
    mode: process.env.NODE_ENV,
   
    output:{
        path:isProduction
            ? path.join(process.cwd(),'./src/server/public')
            : '/',
        
        filemane: 'assets/app.js',
        publicPath: '/',
        //path:path.resolve(__dirname,'app_compilada'),
        //filemane:'bundle.js',
    },
    resolve:{
        extensions:['.js','.jsx']
    },

    optimization:{
        splitChunks:{
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filemane: 'assets/vendor.js',
                    enforce: true,
                    test(module,chunks){
                        const name = module.nameForCondition
                            && module.nameForCondition();
                        return chunks.some(
                            (chunks) => {
                                return chunks.name !== 'vendor' &&
                                    /[\\/]node_modules[\\/]/.test(name)
                            }
                        );
                    },
                },
            },
        },
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
dotenv.config();
const isProduction = (porcess.env.NODE_ENV==='production');