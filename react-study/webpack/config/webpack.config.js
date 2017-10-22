const
	path = require('path'),
	rootPath = path.resolve(__dirname, '..', 'assets'),
	HTMLWebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack');

module.exports = {
	entry: {
		main: [
			path.resolve(rootPath, 'index.js'),
			'webpack-hot-middleware/client?timeout=2000&reload=true'
		]
	},
	output: {
		path: path.resolve(__dirname, '..', 'static'),
		filename: 'index.js',
		publicPath: './public'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		// new HTMLWebpackPlugin({
		// 	template: path.resolve(__dirname, 'src', 'index.html'),
		// 	filename: 'page.html'
		// }),
		// new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin()
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify('production')
		// 	}
		// })
	]
};