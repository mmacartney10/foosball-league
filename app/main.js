import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Counter from './counter/counter'

const renderDom = () => {
  render(
    <Provider store={store}>
      <Counter/>
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(renderDom);
renderDom();


if (module.hot) {
  module.hot.accept()
}
