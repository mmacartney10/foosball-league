import 'rxjs';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import counterEpic from './counter/counterEpic';
import counterReducer from './counter/counterReducer';

import ajaxCallEpic from './ajaxCall/ajaxCallEpic';
import ajaxCallReducer from './ajaxCall/ajaxCallReducer';

// const rootEpic = combineEpics({
//   counterEpic,
//   ajaxCallEpic
// });
//
// const rootReducer = combineReducers({
//   counterReducer,
//   ajaxCallReducer
// });

const epicMiddleware = createEpicMiddleware(ajaxCallEpic);

let store = createStore(
  ajaxCallReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware)
);

console.log('state:', store.getState());

export default store;
