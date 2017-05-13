var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './src/client/public');
var APP_DIR = path.resolve(__dirname, './src/client/app');
var NODE_MODULES = path.resolve(__dirname, './node_modules');

var config = {
    entry: [APP_DIR + '/index.jsx'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /(\.jsx)|(\.js)/,
            include: [APP_DIR, NODE_MODULES],
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.css?/,
            include: [NODE_MODULES, APP_DIR],
            loader: 'style-loader!css-loader'      
        }

        ]
    }
};

module.exports = config;