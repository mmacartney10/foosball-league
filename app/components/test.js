import React from 'react';

var App = React.createClass({

  getInitialState: function() {
    return { count: 0 };
  },

  render: function()  {
    return (
      <div>
        <h1>This is a test</h1>
      </div>
    )
  }
});

export default App;
