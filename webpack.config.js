var webpack = require( 'webpack' );
var PACKAGE = require('./package.json');

module.exports = {
    context: __dirname + '/_src',
    entry: {
        'preorder': './js/preorder/App.js'
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    cache: false
}
