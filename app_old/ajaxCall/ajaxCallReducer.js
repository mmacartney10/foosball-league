var initialState = {
  users: [
    { name: 'steve', age: '21' },
    { name: 'sephano', age: '22' }
  ]
};

const AjaxCallReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return state;
    case 'HAS_DATA':
      return state = action.users;
    case 'ADD_USER':
      return Object.assign({}, state, {
        users: [
          ...state.users,
          action.newUser
        ]
      });
    default:
      return state
  }
}

export default AjaxCallReducer;
