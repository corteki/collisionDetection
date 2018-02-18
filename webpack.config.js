import webpack from 'webpack';
import path from 'path';


export default {
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/main.ts')
    ],
    target: "web",
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                include: path.join(__dirname, 'src'), 
                use: [
                    {loader: 'babel-loader'}, 
                    {loader: 'ts-loader'}
                ]
            }
        ]
    }
}