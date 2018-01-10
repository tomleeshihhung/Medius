import {
  GOALS_CHANGED,
  DAIRY_CHANGED,
  DAIRY_REMIND_ME_CHANGED,
  DAIRY_REMIND_ME_SELECTED_ADD,
  DAIRY_REMIND_ME_SELECTED_DELETE,
  DAIRY_DAYS_CHANGED,
  DAIRY_SERVINGS_CHANGED,

} from './goalsTypesDairy';

export const goalsChanged = (payload) => {
  return {
    type: GOALS_CHANGED,
    payload
  };
};

export const dairyChanged = (payload) => {
  return {
    type: DAIRY_CHANGED,
    payload
  };
};
export const dairyRemindMeChanged = (payload) => {
  return {
    type: DAIRY_REMIND_ME_CHANGED,
    payload
  };
};

export const dairyRemindMeSelectedAdd = (payload) => {
  return {
    type: DAIRY_REMIND_ME_SELECTED_ADD,
    payload
  };
};

export const dairyRemindMeSelectedDelete = (payload) => {
  return {
    type: DAIRY_REMIND_ME_SELECTED_DELETE,
    payload
  };
};

export const dairyDaysChanged = (payload) => {
  return {
    type: DAIRY_DAYS_CHANGED,
    payload
  };
};
export const dairyServingsChanged = (payload) => {
  return {
    type: DAIRY_SERVINGS_CHANGED,
    payload
  };
};
