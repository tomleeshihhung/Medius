import update from 'react-addons-update';
import {
  FRUITS_CHANGED,
  FRUITS_REMIND_ME_CHANGED,
  FRUITS_REMIND_ME_SELECTED_ADD,
  FRUITS_REMIND_ME_SELECTED_DELETE,
  FRUITS_DAYS_CHANGED,
  FRUITS_SERVINGS_CHANGED,
} from '../../screens/GoalsList/Nutrition/Fruits/goalsTypesFruits';

const INITIAL_STATE = {
  RemindMe: '',
  fruitsDays: [
  { title: 1, key: 0, selected: 'false' },
  { title: 2, key: 1, selected: 'false' },
  { title: 3, key: 2, selected: 'false' },
  { title: 4, key: 3, selected: 'false' },
  { title: 5, key: 4, selected: 'false' },
  { title: 6, key: 5, selected: 'false' },
  { title: 7, key: 6, selected: 'false' },
  ],
  fruitsDaysSelected: 7,

  fruitsServings: [
  { title: 1, key: 0, selected: 'false' },
  { title: 2, key: 1, selected: 'false' },
  { title: 3, key: 2, selected: 'false' },
  { title: 4, key: 3, selected: 'false' },
  { title: 5, key: 4, selected: 'false' },
  { title: 6, key: 5, selected: 'false' },
  { title: 7, key: 6, selected: 'false' },
  { title: 8, key: 7, selected: 'false' },
  ],
  fruitsServingsSelected: '',

  fruitsRemindMe: [
  { title: 'Daily', key: 0, selected: 'false' },
  { title: 'Monday', key: 1, selected: 'false' },
  { title: 'Tuesday', key: 2, selected: 'false' },
  { title: 'Wednesday', key: 3, selected: 'false' },
  { title: 'Thursday', key: 4, selected: 'false' },
  { title: 'Friday', key: 5, selected: 'false' },
  { title: 'Saturday', key: 6, selected: 'false' },
  { title: 'Sunday', key: 7, selected: 'false' },
  { title: 'None', key: 8, selected: 'false' },
  ],
  fruitsRemindMeSelected: ['Daily'],
  fruitsAt: '12:00',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRUITS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };

    case FRUITS_REMIND_ME_CHANGED:
    return update(state, {
      fruitsRemindMe: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case FRUITS_REMIND_ME_SELECTED_ADD :
    return {
        ...state,
        fruitsRemindMeSelected: [...state.fruitsRemindMeSelected, action.payload]
    };
    case FRUITS_REMIND_ME_SELECTED_DELETE :
    return {
        ...state,
         fruitsRemindMeSelected:
         state.fruitsRemindMeSelected.filter(item => item !== action.payload),
    };
    case FRUITS_DAYS_CHANGED:
    return update(state, {
      fruitsDays: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case FRUITS_SERVINGS_CHANGED:
    return update(state, {
      fruitsServings: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    default:
      return state;
  }
};
