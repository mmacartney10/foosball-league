import React from 'react'
import store from './store'

var Timer = React.createClass({

  getInitialState: function() {
    return { count: 0 }
  },

  // componentDidMount: function() {
  //   this.countdown = setInterval(this.timer, 1000)
  // },
  //
  // componentWillUnmount: function()  {
  //   clearInterval(this.countdown);
  // },
  //
  // timer: function()  {
  //   this.setState({ count: this.state.count + 2})
  //
  //   store.dispatch({
  //     type: 'UPDATE_TIME',
  //     time: this.state.count
  //   })
  //
  //   console.log(store.getState());
  // },

  updateText: function() {
    console.log('start');

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
})

export default Timer
