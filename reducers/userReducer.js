import {
  USER_CHANGED,
  USER_POINTS_ADD,
} from '../actions/types';

const INITIAL_STATE = {
  points: 0,
  firstName: '',
  lastName: '',
  profilePic: '',
};

// , vegetables: action.payload.value *

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case USER_POINTS_ADD:
      return { ...state, [action.payload.prop]: state.points + action.payload.value };
    default:
      return state;
  }
};
