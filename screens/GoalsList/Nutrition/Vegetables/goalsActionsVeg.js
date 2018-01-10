import {
  VEGETABLES_CHANGED,
  VEGETABLES_REMIND_ME_CHANGED,
  VEGETABLES_REMIND_ME_SELECTED_ADD,
  VEGETABLES_REMIND_ME_SELECTED_DELETE,
  VEGETABLES_DAYS_CHANGED,
  VEGETABLES_SERVINGS_CHANGED,

  DAIRY_CHANGED,
  DAIRY_REMIND_ME_CHANGED,
  DAIRY_REMIND_ME_SELECTED_ADD,
  DAIRY_REMIND_ME_SELECTED_DELETE,
  DAIRY_DAYS_CHANGED,
  DAIRY_SERVINGS_CHANGED,

  PROTEIN_CHANGED,
  PROTEIN_REMIND_ME_CHANGED,
  PROTEIN_REMIND_ME_SELECTED_ADD,
  PROTEIN_REMIND_ME_SELECTED_DELETE,
  PROTEIN_DAYS_CHANGED,
  PROTEIN_SERVINGS_CHANGED,

  WATER_CHANGED,
  WATER_REMIND_ME_CHANGED,
  WATER_REMIND_ME_SELECTED_ADD,
  WATER_REMIND_ME_SELECTED_DELETE,
  WATER_DAYS_CHANGED,
  WATER_SERVINGS_CHANGED,
} from './goalsTypesVeg';

export const vegetablesChanged = (payload) => {
  return {
    type: VEGETABLES_CHANGED,
    payload
  };
};
export const vegetablesRemindMeChanged = (payload) => {
  return {
    type: VEGETABLES_REMIND_ME_CHANGED,
    payload
  };
};

export const vegetablesRemindMeSelectedAdd = (payload) => {
  return {
    type: VEGETABLES_REMIND_ME_SELECTED_ADD,
    payload
  };
};

export const vegetablesRemindMeSelectedDelete = (payload) => {
  return {
    type: VEGETABLES_REMIND_ME_SELECTED_DELETE,
    payload
  };
};

export const vegetablesDaysChanged = (payload) => {
  return {
    type: VEGETABLES_DAYS_CHANGED,
    payload
  };
};
export const vegetablesServingsChanged = (payload) => {
  return {
    type: VEGETABLES_SERVINGS_CHANGED,
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

export const waterDaysChanged = (payload) => {
  return {
    type: WATER_DAYS_CHANGED,
    payload
  };
};
export const waterServingsChanged = (payload) => {
  return {
    type: WATER_SERVINGS_CHANGED,
    payload
  };
};
