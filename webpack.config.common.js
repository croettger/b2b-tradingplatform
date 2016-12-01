const path = require('path');
module.exports= {
	resolve: {
		// Make sure, Webpack finds import'ed and require'd files specified without extension
		// so 'import Bla from './Bla' makes webpack to look for files 'Bla', 'Bla.js' and 'Bla.jsx'
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'source-map',
	entry: [
		'./src/client/main.js'
	],
	output: {
		path: path.join(__dirname, 'public/dist/'),
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
		]
	}
};