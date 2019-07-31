import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = {
  mode: 'production',
};

export default merge(common, config);
