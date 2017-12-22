import {
  GOALS_CHANGED,
  SET_GOAL,
  DAILY_GOAL_COMPLETED_ADD,
  DAILY_GOAL_COMPLETED_DELETE,
  DAILY_GOAL_INCOMPLETE_ADD,
  DAILY_GOAL_INCOMPLETE_DELETE,
  DAILY_GOAL_ADD,
  VEGETABLES_CHANGED,
  VEGETABLES_REMIND_ME_CHANGED,
  VEGETABLES_REMIND_ME_SELECTED_ADD,
  VEGETABLES_REMIND_ME_SELECTED_DELETE,
  VEGETABLES_DAYS_CHANGED,
  VEGETABLES_SERVINGS_CHANGED,

} from './goalsTypes';

export const goalsChanged = (payload) => {
  return {
    type: GOALS_CHANGED,
    payload
  };
};
export const setGoal = (payload) => {
  return {
    type: SET_GOAL,
    payload
  };
};
export const dailyGoalCompletedAdd = (payload) => {
  return {
    type: DAILY_GOAL_COMPLETED_ADD,
    payload
  };
};
export const dailyGoalAdd = (payload) => {
  return {
    type: DAILY_GOAL_ADD,
    payload
  };
};
export const dailyGoalCompletedDelete = (payload) => {
  return {
    type: DAILY_GOAL_COMPLETED_DELETE,
    payload
  };
};
export const dailyGoalIncompleteAdd = (payload) => {
  return {
    type: DAILY_GOAL_INCOMPLETE_ADD,
    payload
  };
};
export const dailyGoalIncompleteDelete = (payload) => {
  return {
    type: DAILY_GOAL_INCOMPLETE_DELETE,
    payload
  };
};
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
