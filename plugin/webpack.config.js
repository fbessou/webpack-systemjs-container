const webpack = require('webpack');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    entry: {
        index: './src/index.js',
        myAwesomePlugin: './src/setPublicPath.js'
    },
    target: 'web',
    mode: 'development',
    plugins: [
        new ModuleFederationPlugin({
            name: 'myAwesomePlugin',
            filename: 'remoteEntry.js',
            exposes: {
                './plugin1': './src/plugin1',
                './plugin2': './src/plugin2',
                './setPublicPath': './src/setPublicPath',
            },
            library: {
                type: 'system',
            },
        }),
    ],
    devServer: {
        port: 9001,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:9000'
        }
    },
};
