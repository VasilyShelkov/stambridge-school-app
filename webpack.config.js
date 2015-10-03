var path = require('path'),
	webpack = require('webpack');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/App.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public'
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'app'),
			loaders: ['react-hot', 'babel']
		}]
	}
};