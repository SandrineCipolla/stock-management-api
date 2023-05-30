import configProd from './configs/config.dev.js'
import webpack from 'webpack';

export default {
    target: 'node',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            GLOBAL_SERVER_PORT: configProd.serverPort
        })
    ]
};
