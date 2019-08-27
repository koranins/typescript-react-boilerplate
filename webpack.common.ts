import webpack, { Configuration, Loader } from 'webpack';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const typescriptReactLoader: Loader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/react', '@babel/typescript'],
    plugins: [['styled-components', { ssr: false }]],
  },
};

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: typescriptReactLoader,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'app-template.html' }),
    new webpack.ProgressPlugin(),
  ],
};

export default config;
