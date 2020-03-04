const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
const APP_CONFIG_DIR = path.resolve(__dirname, 'config');

console.log('Building for env:', NODE_ENV);

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: () => [autoprefixer],
    },
};

const fileLoader = {
    loader: 'file-loader',
    options: {
        name: 'assets/[name].[hash:8].[ext]',
    },
};

const config = {
    entry: ['babel-polyfill', 'event-source-polyfill', path.join(APP_DIR, '/index.jsx')],
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'js/main.[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|app\/less)/,
                use: ['babel-loader'],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp3).*?$/,
                exclude: /app\/less/,
                use: [fileLoader],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', postcssLoader],
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', postcssLoader, 'sass-loader'],
            },
            {
                test: /\.json$/,
                use: ['json-loader'],
            },
        ],
    },
    devtool: NODE_ENV !== 'production' ? 'source-map' : false,
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './api/*.json', to: `${BUILD_DIR}` },
        ]),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl',
            filename: 'index.html',
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV,
        }),
    ],
    resolve: {
        modules: ['node_modules', APP_DIR],
        extensions: ['.js', '.jsx'],
        alias: {
            'app-config': `${APP_CONFIG_DIR}/index.js`,
            'app-routes': `${APP_CONFIG_DIR}/routes.js`,
        },
    },
};

if (NODE_ENV === 'development') {
    config.plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
        })
    );
} else {
    config.plugins = [
        ...config.plugins,
        new CleanWebpackPlugin(['dist']),

        // @todo Optimize moment import
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new UglifyJsPlugin({
            // sourceMap: NODE_ENV !== 'production',
            sourceMap: false,
        }),
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html$|\.png?.+$|\.jpeg?.+$|\.jpg?.+$|\.gif?.+$|\.svg?.+$/,
        }),
    ];
}

module.exports = config;
