import {
  WATER_CHANGED,
  WATER_REMIND_ME_CHANGED,
  WATER_REMIND_ME_SELECTED_ADD,
  WATER_REMIND_ME_SELECTED_DELETE,
  WATER_SERVINGS_CHANGED,

} from './goalsTypesWater';

export const waterChanged = (payload) => {
  return {
    type: WATER_CHANGED,
    payload
  };
};
export const waterRemindMeChanged = (payload) => {
  return {
    type: WATER_REMIND_ME_CHANGED,
    payload
  };
};

export const waterRemindMeSelectedAdd = (payload) => {
  return {
    type: WATER_REMIND_ME_SELECTED_ADD,
    payload
  };
};

export const waterRemindMeSelectedDelete = (payload) => {
  return {
    type: WATER_REMIND_ME_SELECTED_DELETE,
    payload
  };
};
export const waterServingsChanged = (payload) => {
  return {
    type: WATER_SERVINGS_CHANGED,
    payload
  };
};
