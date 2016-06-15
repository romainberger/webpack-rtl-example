const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackRTLPlugin = require('webpack-rtl-plugin')

const config = {
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.css$/,
        // for dev we simply use the style-loader combined with
        // the rtl-css loader
        loaders: ['style', 'rtl-css']
      }
    ]
  }
}

// for production, the style/rtl-css combination is replaced by the extract-text-webpack-plugin
// then we add the webpack-rtl-plugin that will create the second stylesheet
if (process.env.NODE_ENV === 'production') {
  config.module.loaders[1].loader = ExtractTextPlugin.extract('style-loader', 'css')

  config.plugins = [
    new ExtractTextPlugin('app.css'),
    new WebpackRTLPlugin()
  ]
}

module.exports = config
