const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const ASSET_PATH = process.env.ASSET_PATH || '/';

const optimization = () => {
  config = {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [],
  }

  if (isProd) {
    const plugins = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
    ];
    config.minimizer.push(...plugins)
  }
  return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
const cssLoaders = extra => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
  if (extra) loaders.push(extra);
  return loaders;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: '/js/index.js',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext][query]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.scss'],
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@img": path.resolve(__dirname, 'src/images'),
      "@scss": path.resolve(__dirname, 'src/scss'),
    },
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: isProd,
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new CssMinimizerPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images/[name].[ext]',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    compress: true,
    port: 4200,
    open: true,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html/,
        use: ['html-loader'],
      }
    ],
  },
};