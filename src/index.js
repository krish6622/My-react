import React, { Component } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';
import { Provider } from 'react-redux';
import Hello from './Hello';
import * as redux from 'redux-thunk';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'react',
    };
  }

  increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(store.getState());
  };

  decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState());
  };

  push = () => {
    store.dispatch({ type: 'push', value: Math.random() });
    console.log(store.getState());
  };

  pop = () => {
    store.dispatch({ type: 'pop', value: Math.random() });
    console.log(store.getState());
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <Hello />
          <button onClick={this.increment}> in </button>
          <button onClick={this.decrement}> de </button>
          <button onClick={this.push}> push </button>
          <button onClick={this.pop}> pop </button>
        </div>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
