import {
  HELLO_WORLD
} from '../actions/types';

const INITIAL_STATE = {
  helloWorld: 'Hello World'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case HELLO_WORLD:
      return { ...state, helloWorld: action.payload }
    default:
      return state;
  }
}