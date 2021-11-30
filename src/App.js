import React, { component } from 'react';
import './style.css';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <h1>
        <button onClick={this.increment}> in </button>
        <button onClick={this.decrement}> de </button>
      </h1>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: COUNTER_INCREMENT });
    },
    decrement: () => {
      dispatch({ type: COUNTER_DECREMENT });
    },
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
