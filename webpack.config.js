const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const NpmInstallPlugin = require('npm-install-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.BABEL_ENV = 'development';

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const pkg = require('./package.json');

const common = {
    entry: {
        app: PATHS.app
    },

    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        loaders: [{
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: PATHS.app
        }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/template/index.ejs',
            title: 'Form Builder',
            appMountId: 'app',
            inject: false
        })
    ]
};


if (TARGET === 'start' || !TARGET) {

    module.exports = merge(common, {
        devtool: 'cheap-module-eval-source-map',
        module: {
            loaders: [{
                test: /\.css|\.scss$/,
                loaders: ['style', 'css', 'sass']
            }]
        },

        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true
            })
        ]
    });
}

if (TARGET === 'build' || TARGET === 'stats') {
    module.exports = merge(common, {
        output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js',
            chunkFilename: '[chunkhash].js'
        },

        module: {
            loaders: [
                {
                    test: /\.css|\.scss$/,
                    loader: ExtractTextPlugin.extract('style', 'css!sass')
                }
            ]
        },

        plugins: [
            new CleanPlugin([PATHS.build], {
                verbose: false
            }),
            new ExtractTextPlugin('[name].[chunkhash].css'),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

