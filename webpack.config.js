const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry 파일 설정
  entry: {
    polyfills: '@babel/polyfill',
    bundle: './src/index.tsx',
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  // 번들링 될 파일 정보
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    // loader 나열
    rules: [
      {
        // 1
        test: /\.(ts|js)x?$/,
        exclude: '/node_module/',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        // css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // file
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 각 파일 형식으로 번들링 된 파일을 index.html에 자동으로 넣어줌
      template: './public/index.html',
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
