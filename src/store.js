import * as redux from 'redux';

export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

const intialState = {
  count: 0,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
      break;
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
      break;
    }
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);

export default store;
