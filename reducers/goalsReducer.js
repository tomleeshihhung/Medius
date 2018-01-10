import update from 'immutability-helper';
import moment from 'moment';
import {
  GOALS_CHANGED,
  DAILY_GOAL_PROP_CHANGE,
  DAILY_GOAL_COMPLETED_ADD,
  DAILY_GOAL_COMPLETED_DELETE,
  DAILY_GOAL_ADD,
  DAILY_GOAL_DELETE,
  DAILY_GOAL_KEY_MINUS,
  DAILY_POINTS_ADD,
  DAILY_LEFT_MINUS,
  DAILY_GOAL_INCOMPLETE_ADD,
  DAILY_GOAL_INCOMPLETE_DELETE,
} from '../screens/GoalsList/goalsTypes';

const INITIAL_STATE = {
  parentNavigation: {},
  scrollNutrition: 0,
  scrollSugar: 0,
  title: '',
  dailyDay: moment(new Date()).format('YYYY-MM-DD'),
  status: '',
  newStatus: '',
  finished: false,
  dailyKey: -1,
  dailyLeft: [14, 14],
  dailyPoints: [0, 0],
  week: 0,
  day: 0,
  dailyGoal: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOALS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DAILY_GOAL_COMPLETED_ADD:
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
          completed:
          {
            $set:
            state.dailyGoal[
              action.payload.key].completed.filter(item => item !== action.payload.value)
          }
        },
      }
    });
    case DAILY_GOAL_INCOMPLETE_ADD:
    console.log('incomplete add');
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
            incomplete: {
              $set:
              state.dailyGoal[
                action.payload.key].incomplete.filter(item => item !== action.payload.value) }
          },
        }
      });
    case DAILY_GOAL_KEY_MINUS :
      return update(state, {
        dailyGoal: {
          [action.payload.key]: {
            key: {
              $set: action.payload.value }
          },
        }
      });
    case DAILY_GOAL_ADD :
    return {
        ...state,
        dailyGoal: [...state.dailyGoal, action.payload]
    };
    case DAILY_GOAL_DELETE :
    return {
      ...state,
       dailyGoal:
       state.dailyGoal.filter(item => item !== action.payload)
    };
    case DAILY_POINTS_ADD :
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          points: { $set: state.dailyGoal[action.payload.key].points + action.payload.value }
        },
      }
    });
    case DAILY_LEFT_MINUS :
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          daysLeft: { $set: state.dailyGoal[action.payload.key].daysLeft - 1 }
        },
      }
    });
    case DAILY_GOAL_PROP_CHANGE :
    return update(state, {
      dailyGoal: {
        [action.payload.key]: {
          [action.payload.prop]: { $set: action.payload.value }
        },
      }
    });
    default:
      return state;
  }
};
