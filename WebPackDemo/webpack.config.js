const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');


const webpackConfig = {
  entry: {
    app: sourcePath
  },
  output: {
    path: buildPath,
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpglpnglsvg)$/,
        loader: 'url-loader',
        options: {
          limit: 200000,
        },
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_module)/,
        use: "babel-loader"
      },
    ],
  },
  devServer: {
    hot: true,
    host: process.env.HOST,
    // defaults to localhost
    post: process.env.PORT,
    // defaults to 8080
    stats: 'errors-only',
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = function(){
  return webpackConfig;
}
