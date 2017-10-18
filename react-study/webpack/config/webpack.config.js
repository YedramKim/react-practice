const
	path = require('path'),
	rootPath = path.resolve(__dirname, '..', 'assets'),
	HTMLWebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack');

module.exports = {
entry: {
	main: [
		path.resolve(rootPath, 'index.js'),
		'webpack-hot-middleware/client?timeout=20000&reload=true'
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
			test: /\.txt$/,
			exclude: /node_modules/,
			loader: 'raw-loader'
		}
	]
},
plugins: [
	new webpack.optimize.UglifyJsPlugin(),
	// new HTMLWebpackPlugin({
	// 	template: path.resolve(__dirname, 'src', 'index.html'),
	// 	filename: 'page.html'
	// }),
	new webpack.HotModuleReplacementPlugin()
]
};