const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './index.html',
	filename: 'index.html',
	inject: 'body'
});

const config = {
  entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./index.jsx'
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
		publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },
	context: path.resolve(__dirname, 'src'),
	devtool: 'inline-source-map',
	devServer: {
      hot: true,
      // enable HMR on the server

      contentBase: path.resolve(__dirname, 'dist'),
      // match the output path

      publicPath: '/',
      // match the output `publicPath`

      //fallback to root for other urls
      historyApiFallback: true
  },
  module: {
    rules: [
      {
				test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }
    	]}
		]
  },
	plugins: [
		HtmlWebpackPluginConfig,

		new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
};

module.exports = config;
