import {
  USER_CHANGED,
  USER_POINTS_ADD,
} from './types';

export const userChanged = (payload) => {
  return {
    type: USER_CHANGED,
    payload
  };
};
export const userPointsAdd = (payload) => {
  return {
    type: USER_POINTS_ADD,
    payload
  };
};
