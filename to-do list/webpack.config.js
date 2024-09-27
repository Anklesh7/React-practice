const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js',     
    path: path.resolve(__dirname, 'dist'), 
    clean: true,             
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,             
        exclude: /node_modules/,       
        use: {
          loader: 'babel-loader',     
        },
      },
      {
        test: /\.css$/i,              
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],     
  },
  mode: 'development',              
  devtool: 'source-map',             
  devServer: {
    static: './dist',                 
    hot: true,                       
    port: 8080,                       
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',        
      filename: 'index.html',        
    }),
  ],
};

