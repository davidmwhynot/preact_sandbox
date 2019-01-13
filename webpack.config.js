const path = require('path');

module.exports = {
	mode: 'development',
	output: { filename: 'app.js' },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			}
		]
	}
}
