import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './root';


import styles from './styles/main.scss';


const renderDom = () => {
  render (
    <Root store={store}/>,
    document.getElementById('root')
  );
};

store.subscribe(renderDom);
renderDom();
