/**
 * Created by jh on 2018/3/5.
 */

let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extract = new ExtractTextPlugin('build.css');
module.exports={
    entry:{
        index:'./app/index.js',
        vendor:['react','react-dom','redux','react-redux','react-router-dom']
    },
    output:{
        filename:"[name].js",
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {test:/\.less$/,use:extract.extract(['css-loader',{
                loader:'postcss-loader',
                options:{
                    plugins:[
                        require('autoprefixer')//添加前缀
                    ]
                }
            },'less-loader'])}
        ]
    },
    plugins:[
        extract,
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',
    devServer:{
        proxy:{
           '/api':'http://localhost:3000'
        }
    }
};
