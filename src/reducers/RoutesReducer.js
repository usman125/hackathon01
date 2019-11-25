import {
  SET_ACTIVE_ROUTE
} from '../actions/types';

const INITIAL_STATE = {
  activeRoute: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_ROUTE:
      return {
        ...state,
        activeRoute: action.payload,
      }
    default:
      return state;
  }
}