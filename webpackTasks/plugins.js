/* eslint-disable */

module.exports = function(environment, isProd, webpack, ExtractTextPlugin) {

  const vendorName = `vendor${environment}`;
  const vendorFileName = `vendor.${environment}.js`;
  const stylesFileName = `styles.${environment}.css`;

  var webpackPlugins = [];

  webpackPlugins.push(new webpack.DefinePlugin({
    'process.env': {'NODE_ENV': JSON.stringify(environment)}
  }));

  if (isProd) {
    webpackPlugins.push(new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }));

    webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({
      debug: true,
      minimize: true,
      sourceMap: true,
      output: {comments: false},
      compressor: {warnings: false}
    }));
  }

  webpackPlugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: vendorName,
    filename: vendorFileName
  }));

  webpackPlugins.push(new ExtractTextPlugin(stylesFileName));

  return webpackPlugins;
};
