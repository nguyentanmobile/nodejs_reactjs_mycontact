var path = require("path");
var webpack = require("webpack");
var BUILD_DIR = path.resolve(__dirname,"./client/public/js");
var APP_DIR = path.resolve(__dirname,"./app");
var config =  {
    entry:{
        index:APP_DIR+"/index.jsx"
    },
    output:{
        path:BUILD_DIR,
        filename:'[name].entry.js',
        publicPath:BUILD_DIR
    },
    module:{
        loaders:[
            {
                test:/\.jsx?/,
                include:APP_DIR,
                loader:"babel-loader"
            }
        ]
    }

};

module.exports = config;