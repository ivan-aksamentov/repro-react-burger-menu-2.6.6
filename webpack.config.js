const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelConfig = require('./babel.config')

module.exports = {
  mode: 'development',
  bail: true,
  name: 'client',
  target: 'web',
  stats: false,

  entry: ['./src/app.js'],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  devServer: {
    contentBase: path.join(__dirname, 'static'),
    hot: true,
    lazy: false,
    noInfo: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    port: 3000,
    quiet: false,
    stats: {
      all: false,
      errors: true,
      warnings: true,
      moduleTrace: true,
    },
    writeToDisk: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.join(__dirname, 'eslintrc.js'),
              failOnError: true,
              quiet: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...babelConfig,
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'templates', 'index.html'),
    }),
  ],
}
