const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for your application
  output: {
    filename: 'main.js',     // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true,             // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,              // Use Babel for .js and .jsx files
        exclude: /node_modules/,       // Exclude the node_modules directory
        use: {
          loader: 'babel-loader',      // Use babel-loader to transpile ES6 and JSX
        },
      },
      {
        test: /\.css$/i,              // Use loaders for CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],     // Automatically resolve these extensions
  },
  mode: 'development',               // Set the mode to development
  devtool: 'source-map',             // Enable source maps for easier debugging
  devServer: {
    static: './dist',                 // Serve files from the dist directory
    hot: true,                        // Enable hot module replacement
    port: 8080,                       // Development server port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',        // Path to your HTML file
      filename: 'index.html',        // Output filename for the HTML file
    }),
  ],
};

