module.exports = {
    entry: './main.js',
    output: {
        // path: './build', // This is where images AND js will go
        // publicPath: 'http://yoururl.com/', // This is used to generate URLs
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    }
    //     test: /\.less$/,
    //     loader: "style!css!less"
};
