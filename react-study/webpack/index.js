const
	webpack = require('webpack'),
	webpackMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./config/webpack.config'),
	compile = webpack(config);

webpack(config, () => console.log('ㅋㅋ'));
module.exports = (app) => {
	app.use(webpackMiddleware(compile, {
		noInfo: true,
		publicPath: '/public/',
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compile, {
		log: console.log
	}));
};