const path = require('path')
const webpack = require('webpack')
//const glob = require('glob-all');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const PurifyCSSPlugin = require('purifycss-webpack');


/*const entry = {
	t1: [path.resolve('t1', 'index.js')],
	t2: [path.resolve('t2', 'index.js')],
	t3: [path.resolve('t3', 'index.js')],
	t4: [path.resolve('t4', 'index.js')],
	t5: [path.resolve('t5', 'index.js')],
}*/

module.exports = {
	/*resolve: {
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},*/
	devtool: 'source-map',
	entry: path.resolve(path.join('src', 'index.js')),
	output: {
		filename: 'entry.js',
		path: path.resolve(__dirname, 'dist'),
		//publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [/*'react-hot-loader/webpack',*/ 'babel-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'url-loader',
			},
			/*{
			 test: /\.css$/,
			 use: ExtractTextPlugin.extract({
			 fallback: "style-loader",
			 use: "css-loader"
			 })
			 }*/
			/*{
			 test: /\.css$/,
			 loader: ExtractTextPlugin.extract({
			 fallbackLoader: 'style-loader',
			 loader: 'css-loader'
			 })
			 }*/
		],
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		/*new ExtractTextPlugin('[name].css'),
		 new PurifyCSSPlugin({
		 // Give paths to parse for rules. These should be absolute!
		 verbose: true,
		 //minimize: true,
		 paths: glob.sync([
		 path.join(__dirname, 'src') + '/containers/!*',
		 path.join(__dirname, 'src') + '/create.js',
		 __dirname + '/index.html'
		 ]),
		 styleExtensions: ['.css']
		 })*/
		/*new ExtractTextPlugin('[name].css'),
		 new PurifyCSSPlugin({
		 // Give paths to parse for rules. These should be absolute!
		 paths: glob.sync(path.join(__dirname, '*.html')),
		 })*/
		// enable HRM globally
		//new webpack.HotModuleReplacementPlugin(),

		// prints more readable module names in the browser console on HMR updates
		//new webpack.NamedModulesPlugin(),
	],
	/*devServer: {
	 hot: true,
	 historyApiFallback: true,
	 },*/
}
