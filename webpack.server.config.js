var webpack = require('webpack');
var path = require('path');

var SERVER_APP_DIR = path.resolve(__dirname, './src/server/app');
var BUILD_DIR = path.resolve(__dirname, './bundle/');

var config = {
    target: 'node',
    entry: [SERVER_APP_DIR + '/server.js'],
    output: {
        path: BUILD_DIR,
        filename: 'server-bundle.js'
    },
    module: {
        loaders: [
        {
            test: /(\.jsx)|(\.js)/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.css?/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'      
        }
        ]
    }
};

module.exports = config;