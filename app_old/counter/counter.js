import React from 'react';
import store from '../store';

var Counter = React.createClass({

  getInitialState: function() {
    return { count: 0 };
  },

  updateText: function() {
    store.dispatch({
      type: 'INCREMENT',
      count: this.state.count
    });
  },

  render: function()  {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={this.updateText}>Increment</button>
      </div>
    )
  }
});

export default Counter;
