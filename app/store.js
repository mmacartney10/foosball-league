import { createStore } from 'redux';

const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return action.count + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('state:', store.getState());

export default store;
