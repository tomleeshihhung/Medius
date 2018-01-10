import {
  GOALS_CHANGED,
  SET_GOAL,
  DAILY_GOAL_COMPLETED_ADD,
  DAILY_GOAL_COMPLETED_DELETE,
  DAILY_GOAL_INCOMPLETE_ADD,
  DAILY_GOAL_INCOMPLETE_DELETE,
  DAILY_GOAL_ADD,
  DAILY_GOAL_DELETE,
  DAILY_POINTS_ADD,
  DAILY_GOAL_KEY_MINUS,
  DAILY_GOAL_PROP_CHANGE,
  DAILY_LEFT_MINUS,
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
export const dailyGoalAdd = (payload) => {
  return {
    type: DAILY_GOAL_ADD,
    payload
  };
};
export const dailyGoalKeyMinus = (payload) => {
  return {
    type: DAILY_GOAL_KEY_MINUS,
    payload
  };
};
export const dailyGoalDelete = (payload) => {
  return {
    type: DAILY_GOAL_DELETE,
    payload
  };
};
export const dailyPointsAdd = (payload) => {
  return {
    type: DAILY_POINTS_ADD,
    payload
  };
};
export const dailyGoalPropChange = (payload) => {
  return {
    type: DAILY_GOAL_PROP_CHANGE,
    payload
  };
};
export const dailyLeftMinus = (payload) => {
  return {
    type: DAILY_LEFT_MINUS,
    payload
  };
};
export const dailyGoalCompletedAdd = (payload) => {
  return {
    type: DAILY_GOAL_COMPLETED_ADD,
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
