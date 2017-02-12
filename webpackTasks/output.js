/* eslint-disable */

module.exports = function(path, environment) {

  return {
    path: path.resolve(__dirname, '../public'),
    filename: `bundle.${environment}.js`,
    publicPath: '/public/'
  };
}
