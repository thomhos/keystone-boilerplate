var path = require('path');

module.exports = {
	entry: ['./client/javascript/main'],

	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'main.js',
		publicPath: '/'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};