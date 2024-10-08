const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
  mode: 'development', 
  devServer: {
    static: path.join(__dirname, 'dist'), 
    compress: true, 
    port: 8080, 
    open: true, 
  },
};
        