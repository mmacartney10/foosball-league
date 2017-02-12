import React from 'react';
import styles from './app.scss';

var App = React.createClass({

  getInitialState: function() {
    return { count: 4 };
  },

  render: function()  {
    return (
      <div>
        <h1 className="title">This is an App {this.state.count}</h1>
      </div>
    );
  }
});

export default App;
