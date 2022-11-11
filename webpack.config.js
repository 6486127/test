const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports =  {
    mode,
    target,
    devtool,
    devServer:{
        port: 7000,
        open: true,
        hot: true,
    },
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')],
    output: {
       path: path.resolve(__dirname, 'dist'),
       clean: true,
       filename: '[name].[contenthash].js',
       assetModuleFilename: 'asset/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    module: {
        rules: [
            //Loading HTML
            {
                test: /\.html$/i,
                loader: 'html-loader', 
            },
            //Loadding CSS
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader"
                ],
            },
            //Loading fonts
            {
                test: /\.woff2?$/i,
                type: 'asset/resource', 
                generator: {
                    filename: "fonts/[name][ext]"
                }
            },
            //Loading images
            {
                test: /\.(jpe?g|svg|png|gif)?$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                              enabled: false,
                            },
                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                              quality: 75
                            }
                          }
                    }
                ],
                type: 'asset/resource', 
                generator: {
                    filename: "assets/[name][ext]"
                }
            },
            //Loading js(Babel)
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
        ]
    }
}