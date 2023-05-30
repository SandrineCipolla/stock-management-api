import configProd from './configs/config.prod.js'
import webpack from 'webpack';

export default {
    target: 'node',
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            GLOBAL_SERVER_PORT: configProd.serverPort
        })
    ]
};
