const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var env = process.env.NODE_ENV;

// Constant with our paths
var paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(paths.SRC, 'index.html'),
  filename: "./index.html"
});

const extractTextPlugin = new ExtractTextPlugin('style.bundle.css'); // CSS will be extracted to this bundle file

// Webpack configuration
var commonConfig = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },

    // Loaders configuration
  module: {
    rules: [
      {  // We are telling webpack to use "babel-loader" for .js and .jsx files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      // CSS loader for CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
       // File loader for image assets -> ADDED IN THIS STEP
      // We'll add only image extensions, but you can things like svgs, fonts and videos
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  // Enable importing JS files without specifying their's extenstion
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    alias: {
        Actions :  path.resolve(__dirname, 'src/actions/'),
        Componenets :  path.resolve(__dirname, 'src/components/'),
        Containers :  path.resolve(__dirname, 'src/containers/'),
        Reducers :  path.resolve(__dirname, 'src/reducers/')
    },
    extensions: ['.js', '.jsx'],
  },
   // Tell webpack to use html plugin
  plugins: [htmlPlugin,extractTextPlugin]
};

var devConfig = {
  devtool: 'inline-source-map',
  entry: ['webpack-hot-middleware/client?reload=true'],
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env || 'development')
      })
  ],
  module: {
      rules: [
          {
              enforce: 'pre',
              test: /\.js$/,
              exclude: [/node_modules/,/vendor/,'/test/'],
              loader: "jshint-loader"
          }
      ]
  },
  devServer: {
      port: 3000,
      hot: true,
      //host: '0.0.0.0',
      historyApiFallback: true,
      disableHostCheck: true
  }
};

var prodConfig = {
  devServer: {
    port: 3000
  },
  plugins: [
      /*new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
  
      }),*/
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env || 'production')
      })
  ]
};

var config;

switch (env) {
    case 'development':
        config = merge(devConfig, commonConfig);
        break;
    default:
        config = merge(prodConfig, commonConfig);
        break;
}

module.exports = config;
