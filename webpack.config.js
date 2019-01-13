module.exports = {
	rules: [
		{ test: /\.css$/, loader: 'style!css' },
	],
	output: { filename: 'app.js' }
}
