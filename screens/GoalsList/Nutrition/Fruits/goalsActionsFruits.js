import {
  GOALS_CHANGED,
  FRUITS_CHANGED,
  FRUITS_REMIND_ME_CHANGED,
  FRUITS_REMIND_ME_SELECTED_ADD,
  FRUITS_REMIND_ME_SELECTED_DELETE,
  FRUITS_DAYS_CHANGED,
  FRUITS_SERVINGS_CHANGED,

} from './goalsTypesFruits';

export const goalsChanged = (payload) => {
  return {
    type: GOALS_CHANGED,
    payload
  };
};

export const fruitsChanged = (payload) => {
  return {
    type: FRUITS_CHANGED,
    payload
  };
};
export const fruitsRemindMeChanged = (payload) => {
  return {
    type: FRUITS_REMIND_ME_CHANGED,
    payload
  };
};

export const fruitsRemindMeSelectedAdd = (payload) => {
  return {
    type: FRUITS_REMIND_ME_SELECTED_ADD,
    payload
  };
};

export const fruitsRemindMeSelectedDelete = (payload) => {
  return {
    type: FRUITS_REMIND_ME_SELECTED_DELETE,
    payload
  };
};

export const fruitsDaysChanged = (payload) => {
  return {
    type: FRUITS_DAYS_CHANGED,
    payload
  };
};
export const fruitsServingsChanged = (payload) => {
  return {
    type: FRUITS_SERVINGS_CHANGED,
    payload
  };
};
