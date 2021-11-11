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
    console.log(store.getState().count);
  };

  decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState().count);
  };

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <button onClick={this.increment}> in </button>
        <button onClick={this.decrement}> de </button>
      </div>
    );
  }
}
ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById('root')
);
