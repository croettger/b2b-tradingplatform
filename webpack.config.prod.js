const webpack = require('webpack');
const common = require('./webpack.config.common');
const prodConfig=Object.assign({}, common, {
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.DefinePlugin({
                NODE_ENV: '"production"',
                API_SERVER_URL: '"http://web2.de:8888"'
            }),
            new webpack.optimize.UglifyJsPlugin()
        ]
    }
);

module.exports = prodConfig;