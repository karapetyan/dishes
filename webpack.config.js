module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  }, 
  devtool: '#source-map',
  devServer: {
    contentBase: 'dist'
  },
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  mode: 'development'
}