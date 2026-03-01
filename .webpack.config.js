const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './script.js', // Точка входа для вашего JS
  output: {
    filename: 'bundle.js', // Имя выходного JS-файла
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ваш исходный HTML
      filename: 'index.html', // Имя итогового HTML
    }),
  ],
  module: { // Правила для обработки разных типов файлов
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Обработка CSS
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Транспиляция JS (ES6+ в ES5)
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Добавьте правила для изображений, шрифтов и т.д.
    ],
  },
};
