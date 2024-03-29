const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // https://webpack.js.org/configuration/mode/
  mode: 'development',

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/page-index/main.js',
    about: './src/page-about/main.js',
    contacts: './src/page-contacts/main.js',
    shop: './src/page-shop/main.js',
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    open: true,
    writeToDisk: false, // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        // https://webpack.js.org/loaders/babel-loader/#root
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // {
      //   // https://webpack.js.org/loaders/css-loader/#root
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // Переводит CSS в CommonJS
          'sass-loader',
        ],
      },
      {
        // https://webpack.js.org/guides/asset-modules/#resource-assets
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        // https://webpack.js.org/loaders/html-loader/#usage
        resourceQuery: /template/,
        loader: 'html-loader',
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/page-about/tmpl.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/page-contacts/tmpl.html',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/page-shop/tmpl.html',
      inject: true,
      chunks: ['shop'],
      filename: 'shop.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new CleanWebpackPlugin({}),
  ],
}
