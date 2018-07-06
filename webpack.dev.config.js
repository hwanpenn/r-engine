const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
// const proxy = require('http-proxy-middleware');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './static'),
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            '*': {
                // target: 'http://localhost:8080',
                target: 'http://192.168.21.122:8085',
                // target: 'http://192.168.21.126:8085',
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            MOCK: false
        })
    ]
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);