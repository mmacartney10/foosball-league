import React from 'react';

var App = React.createClass({

  getInitialState: function() {
    return { count: 4 };
  },

  render: function()  {
    return (
      <div>
        <h1>This is an app {this.state.count}</h1>
      </div>
    )
  }
});

export default App;
