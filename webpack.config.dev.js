const webpack = require("webpack");
const common = require("./webpack.config.common");
module.exports=Object.assign({}, common, {
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                NODE_ENV: 'production',
                API_SERVER_URL: 'http://localhost:3000'
            })
        ]
    }
);