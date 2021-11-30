import React, { Component } from 'react';
import './style.css';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';
import { connect } from 'react-redux';

class Hello extends Component {
  add = () => {
    const count = 'count' + this.props.count;
    this.props.update(count);
  };
  render() {
    return (
      <h1>
        hello {this.props.count}
        <button onClick={this.props.increment}> in </button>
        <button onClick={this.props.decrement}> de </button>
        <button onClick={this.add}>push </button>
        pushed data :{this.props.data.length}
      </h1>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    count: state.counter.count,
    data: state.tester,
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
    update: (data) => {
      dispatch({ type: 'push', value: data });
    },
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Hello);
