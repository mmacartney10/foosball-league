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

export default CounterReducer;
