import React from 'react';
import store from '../store';

var AjaxCall = React.createClass({

  getData: function() {
    store.dispatch({
      type: 'GET_DATA'
    });
  },

  addUser: function() {
    store.dispatch({
      type: 'ADD_USER',
      newUser: { "name": "sdsd", "age": "22" }
    });
  },

  render: function()  {
    var userNames = store.getState().users.map(function(user, index) {
      return <li key={index}>Name: {user.name} Age: {user.age}</li>;
    });

    return (
      <div>
        <ul>{userNames}</ul>
        <button onClick={this.getData}>Get Data</button>
        <button onClick={this.addUser}>Add User</button>
      </div>
    )
  }
});

export default AjaxCall;
