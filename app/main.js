import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './root';

const renderDom = () => {
  render (
    <Root store={store}/>,
    document.getElementById('root')
  )
}

store.subscribe(renderDom);
renderDom();
