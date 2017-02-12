/* eslint-disable */

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'precss': {},
    'stylelint': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    },
    'autoprefixer': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'cssnano': true,
  },
};
