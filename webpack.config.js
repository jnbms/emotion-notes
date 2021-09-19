const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = 3000;

module.exports = {
    mode: 'development',
    entry: './front/react.js',
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
        // 덮어씌우기 기능 추가
        clean: true
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {minimize: true}
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // HTML 파일 연결
            template: './index.html',
        })
    ],
    stats : {
        children: true,
    },
    devServer: {
        host: 'localhost',
        port: port,
    }
}