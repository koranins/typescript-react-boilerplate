import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
};

export default merge(common, config);
