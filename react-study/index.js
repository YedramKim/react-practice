const
	webpack = require('./webpack'),
	path = require('path'),
	express = require('express'),
	app = express();

webpack(app);
app.get('/', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, 'page.html'));
});

app.listen(3000, () => console.log('Express running at localhost'));