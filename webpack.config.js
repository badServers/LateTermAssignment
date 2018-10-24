const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 3000,
		open: true,
		proxy: {
			"/api": "http://localhost:8080"
		}
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new HtmlWebpackPlugin({
			title: 'Greeting page'
		})
	]
}