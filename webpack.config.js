var webpack = require('webpack');
var path = require('path');

var CLIENT_APP_DIR = path.resolve(__dirname, './src/client/app');
var BUILD_DIR = path.resolve(__dirname, './bundle/');

var config = {
    entry: [CLIENT_APP_DIR + '/index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'client-bundle.js'
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
            include: /react-date-picker/,
            loader: 'style-loader!css-loader'      
        }
        ]
    }
};

module.exports = config;