import {
  PROTEIN_CHANGED,
  PROTEIN_REMIND_ME_CHANGED,
  PROTEIN_REMIND_ME_SELECTED_ADD,
  PROTEIN_REMIND_ME_SELECTED_DELETE,
  PROTEIN_REMIND_ME_VALUE_ADD,
  PROTEIN_REMIND_ME_VALUE_DELETE,
  PROTEIN_DAYS_CHANGED,
  PROTEIN_SERVINGS_CHANGED,
} from './goalsTypesProtein';

export const proteinChanged = (payload) => {
  return {
    type: PROTEIN_CHANGED,
    payload
  };
};
export const proteinRemindMeChanged = (payload) => {
  return {
    type: PROTEIN_REMIND_ME_CHANGED,
    payload
  };
};

export const proteinRemindMeSelectedAdd = (payload) => {
  return {
    type: PROTEIN_REMIND_ME_SELECTED_ADD,
    payload
  };
};

export const proteinRemindMeSelectedDelete = (payload) => {
  return {
    type: PROTEIN_REMIND_ME_SELECTED_DELETE,
    payload
  };
};
export const proteinRemindMeValueAdd = (payload) => {
  return {
    type: PROTEIN_REMIND_ME_VALUE_ADD,
    payload
  };
};

export const proteinRemindMeValueDelete = (payload) => {
  return {
    type: PROTEIN_REMIND_ME_VALUE_DELETE,
    payload
  };
};
export const proteinDaysChanged = (payload) => {
  return {
    type: PROTEIN_DAYS_CHANGED,
    payload
  };
};
export const proteinServingsChanged = (payload) => {
  return {
    type: PROTEIN_SERVINGS_CHANGED,
    payload
  };
};
