const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your entry file
  output: {
    filename: 'main.js', // The name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Matches all CSS files
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
    ],
  },
  mode: 'development', // Set mode to development for easier debugging
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve files from the dist directory
    compress: true, // Enable gzip compression for better performance
    port: 8080, // Port number for the server
    open: true, // Automatically open the browser
  },
};
        