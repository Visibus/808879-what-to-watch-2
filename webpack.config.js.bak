const webpack = require('webpack');
const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1338,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.webm']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`
};
