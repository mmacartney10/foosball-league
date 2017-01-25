import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import Timer from './timer';

render (
  <Timer/>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept();
}
