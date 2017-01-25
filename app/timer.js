import React from 'react';

var Timer = React.createClass({

  getInitialState: function() {
    return { text: 'not', count: 0 }
  },

  componentDidMount: function() {
    this.countdown = setInterval(this.timer, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.countdown);
  },

  timer: function() {
    this.setState({ count: this.state.count + 12})
  },

  render: function() {
    return (
      <div>
        <h1>{this.state.text} bob</h1>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
})

module.exports = Timer;
