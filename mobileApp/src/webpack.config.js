const path = require('path');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './index.tsx', // Entry point for web
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Regex to match TypeScript and JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling TypeScript/JavaScript
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Presets for babel
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Regex to match image files
        type: 'asset/resource', // Use asset/resource for handling binary files
      },
      {
        test: /\.html$/, // Regex to match HTML files
        use: ['html-loader'], // Use html-loader for processing HTML files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve file extensions
    alias: {
      // Aliases for react-native to react-native-web equivalents
      'react-native$': 'react-native-web', // Redirects 'react-native' imports to 'react-native-web'
      'react-native/Libraries/Renderer/shims/ReactNative': 'react-native-web/dist/exports/Renderer', // For Renderer shim
      'react-native/Libraries/Utilities/codegenNativeCommands': 'react-native-web/dist/exports/codegenNativeCommands', // For codegenNativeCommands
      'react-native/Libraries/Utilities/codegenNativeComponent': 'react-native-web/dist/exports/codegenNativeComponent', // For codegenNativeComponent
      // Add more aliases for other specific React Native libraries as needed
    },
    plugins: [new TsconfigPathsPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from public directory
    },
    compress: true, // Enable gzip compression
    port: 3000, // Dev server port
    open: true, // Open default browser on server start
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to your .env file
      safe: false, // Set to true if you want to load .env.example (defaults to "false" which does not use dotenv-safe)
      allowEmptyValues: true, // Allows empty values (e.g., NODE_ENV=) to be loaded from .env file
      systemvars: true, // Load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    }),
  ],
};
