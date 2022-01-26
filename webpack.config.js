const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 600, //Check for changes after modifing file
    //     ignored: /node_modules/,
    //     // poll: 1000, // Check for changes every second
    // },
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map', // In order to make it easier to track down errors and warnings, JavaScript offers source maps,   (though not for production)
    devServer: {
        static: './dist', //tell the dev server where to look for files:
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
        ]
    }
};