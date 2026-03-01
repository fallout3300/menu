const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack'); // Импортируем webpack

module.exports = {
  // mode: 'development',
  entry: './src/app/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Добавляем загрузчики для изображений/файлов, которые может использовать плагин (иконки и т.д.)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    // Делаем jQuery глобально доступным для старых плагинов
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  resolve: {
    alias: {
      jquery: "jquery/src/jquery.js",
      '@': path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    host: '192.168.1.66', // Укажите ваш конкретный IP
    port: 8080,            // Порт (по умолчанию 8080)
    open: true,            // Автоматически открывать браузер
  },
};
