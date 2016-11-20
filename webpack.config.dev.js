var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/client/index.html',
    filename: 'index.html'
});

const webpack = require('webpack');
const common = require('./webpack.config.common');
const devConfig=Object.assign({}, common, {
        plugins: [HTMLWebpackPluginConfig,
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                NODE_ENV: 'production',
                API_SERVER_URL: 'http://localhost:3000'
            })
        ]
    }
);

module.exports = devConfig;