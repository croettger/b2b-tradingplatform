module.exports={
	entry: "./src/client/main.js",
	output: {
		path: "./public/dist/",
		filename: "app.js"
	},

	devtool: "source-map",

	module: {
		loaders: [
			{test:/\.js$/,exclude: /node_modules/,loader: 'babel-loader'},
			{test:/\.js$/,exclude: /node_modules/,loader: 'eslint-loader'}
		]
		
	}
};