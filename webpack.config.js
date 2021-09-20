const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = 3000;

module.exports = {
    mode: 'development',
    entry: './front/app/react.js',
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
        // 덮어씌우기 기능 추가
        clean: true,
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        // 별명 경로 설정
        alias: {
            resource: path.resolve('./resource'),
        }
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
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader'
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
        hot: true,
        // 일렉트론 리로드시 publicPath 통해서 실행
        historyApiFallback: true,
    }
}