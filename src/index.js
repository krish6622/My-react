import React, { component } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';
import { useDispatch, useSelector } from 'react-redux';

class App extends React.Component {
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
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see magic happen :)</p>
        <button onClick={this.increment}> in </button>
        <button onClick={this.decrement}> de </button>
        <button onClick={this.push}> push </button>
        <button onClick={this.pop}> pop </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
