//This includes a module that makes it easy to generate absolute file paths later on.
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //This is where webpack starts from when running the build process.
    entry: './src/index.js',
    //This is the compiled js, we can choose what the file is called and where it is saved.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        //This is the url that our static assets will use.
        publicPath: '',
		clean: true
    },
    mode: 'development',
    module: {
        //Rules is where we assign an asset type to a file type. Resource, inline, general or source
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
			{
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				]
			}
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
	],
};