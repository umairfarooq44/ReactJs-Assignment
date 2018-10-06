var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                exclude: /node_modules/ 
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
              },
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: './index.html',
          filename: 'index.html'
        }),
      ]
};

module.exports = config;