import 'rxjs';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import counterEpic from './counter/counterEpic';
import counterReducer from './counter/counterReducer';

// const rootEpic = combineEpics({
//   counterEpic
// });

// const rootReducer = combineReducers({
//   counterReducer
// });

const epicMiddleware = createEpicMiddleware(counterEpic);

const store = createStore(
  counterReducer,
  applyMiddleware(epicMiddleware)
);

console.log(store.getState());

export default store;
