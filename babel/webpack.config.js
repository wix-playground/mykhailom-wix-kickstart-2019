const path = require('path')
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                // {
                //     // test: /\.css$/,
                //     // todo: [scss] uncomment the next line
                //     // test: /(\.css$)|(\.scss$)/,
                //
                //     use: [
                //         'style-loader',
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 modules: true,
                //                 localIdentName: '[path][name]__[local]--[hash:base64:5]',
                //             },
                //         },
                //
                //         // todo: [scss] uncomment next line
                //         // 'sass-loader',
                //     ],
                // },
            ],
        },
        plugins: [
            // new BundleAnalyzerPlugin(),

            // todo: [hmr] uncomment next line
            // new webpack.HotModuleReplacementPlugin(),
        ],
    }
};