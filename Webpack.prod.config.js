const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 600, //Check for changes after modifing file
        ignored: /node_modules/,
        // poll: 1000, // Check for changes every second
    },
    mode: 'development',
    entry: './src/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
};