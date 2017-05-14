var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './src/client/public');
var APP_DIR = path.resolve(__dirname, './src/client/app');
var NODE_MODULES = path.resolve(__dirname, './node_modules');

var config = {
    entry: [APP_DIR + '/index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /(\.jsx)|(\.js)/,
            include: [APP_DIR],
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.css?/,
            include: [APP_DIR],
            loader: 'style-loader!css-loader'      
        }
        ]
    }
};

module.exports = config;