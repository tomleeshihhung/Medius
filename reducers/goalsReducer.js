import update from 'immutability-helper';
import moment from 'moment';
import {
  GOALS_CHANGED,
  DAILY_GOAL_COMPLETED_ADD,
  DAILY_GOAL_COMPLETED_DELETE,
  DAILY_GOAL_INCOMPLETE_ADD,
  DAILY_GOAL_INCOMPLETE_DELETE,
  DAILY_GOAL_ADD,
  SET_GOAL,
} from '../screens/GoalsList/goalsTypes';

const INITIAL_STATE = {
  parentNavigation: {},
  title: '',
  dailyDay: moment(new Date()).format('YYYY-MM-DD'),
  status: '',
  newStatus: '',
  week: 0,
  day: 0,
  dailyGoal: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOALS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SET_GOAL:
      return { ...state, goal1: action.payload };
    case DAILY_GOAL_COMPLETED_ADD:
    //debugger;
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          completed: { $push: [action.payload.value] }
        },
      }
    });
    case DAILY_GOAL_COMPLETED_DELETE :
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          completed: { $set: state.dailyGoal[action.payload.key].completed.filter(item => item !== action.payload.value) }
        },
      }
    });
    case DAILY_GOAL_INCOMPLETE_ADD:
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          incomplete: { $push: [action.payload.value] }
        },
      }
    });
    case DAILY_GOAL_INCOMPLETE_DELETE :
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          incomplete: { $set: state.dailyGoal[action.payload.key].completed.filter(item => item !== action.payload.value) }
        },
      }
    });
    case DAILY_GOAL_ADD :
    return {
        ...state,
        dailyGoal: [...state.dailyGoal, action.payload]
    };
    default:
      return state;
  }
};
