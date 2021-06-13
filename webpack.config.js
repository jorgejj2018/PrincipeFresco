const HtmlWebpackPlugin = require('html-webpack-plugin'),
 MiniCssExtractPlugin = require('mini-css-extract-plugin'),
 path = require('path');
module.exports = {
    entry:{
        inicio:'./src/index.js',
        login:'./src/login.js',
        registrar:'./src/registrar.js',
        logeado:'./src/logeado.js',
        coleccion:'./src/coleccion.js',
    },
    output:{
        filename: "[name].[chunkhash].js"
    },
    module:{
        rules:[
            {
                test: /\.js?$/i,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                },
            },
            {
                test:/\.html$/i,
                use:[
                    {
                        loader: "html-loader",
                        options:{
                            minimize:true,
                        },
                    }
                ],
            },
            
            {
                test:/\.css$/i,
                use:[
                    {
                         loader:MiniCssExtractPlugin.loader,
                         options:{
                            publicPath:".clear/",
                         },
                    },    
                    "css-loader",  
                ],
            },
            {
                test:/\.jpe?g|png|gif|svg|webp$/i,
                use:["file-loader?name=assets/[name].[ext]","image-webpack-loader"],
            },
            {
                test:/\.(woff)$/i,
                use:["file-loader?name=assets/[name].[ext]"],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
            chunks:["inicio"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template:"./src/login.html",
            filename:"./login.html",
            chunks:["login"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template:"./src/registrar.html",
            filename:"./registrar.html",
            chunks:["registrar"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template:"./src/logeado.html",
            filename:"./logeado.html",
            chunks:["logeado"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template:"./src/coleccion.html",
            filename:"./coleccion.html",
            chunks:["coleccion"],
            hash: true,
        }),
        new MiniCssExtractPlugin(),
            
    ],
};