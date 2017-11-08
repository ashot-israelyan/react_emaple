module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
};