import update from 'react-addons-update';
import {
  VEGETABLES_CHANGED,
  VEGETABLES_REMIND_ME_CHANGED,
  VEGETABLES_REMIND_ME_SELECTED_ADD,
  VEGETABLES_REMIND_ME_SELECTED_DELETE,
  VEGETABLES_DAYS_CHANGED,
  VEGETABLES_SERVINGS_CHANGED,
} from '../../screens/GoalsList/Nutrition/Vegetables/goalsTypesVeg';

const INITIAL_STATE = {
  RemindMe: '',
  vegetablesDays: [
  { title: 1, key: 0, selected: 'false' },
  { title: 2, key: 1, selected: 'false' },
  { title: 3, key: 2, selected: 'false' },
  { title: 4, key: 3, selected: 'false' },
  { title: 5, key: 4, selected: 'false' },
  { title: 6, key: 5, selected: 'false' },
  { title: 7, key: 6, selected: 'false' },
  ],
  vegetablesDaysSelected: 7,

  vegetablesServings: [
  { title: 1, key: 0, selected: 'false' },
  { title: 2, key: 1, selected: 'false' },
  { title: 3, key: 2, selected: 'false' },
  { title: 4, key: 3, selected: 'false' },
  { title: 5, key: 4, selected: 'false' },
  { title: 6, key: 5, selected: 'false' },
  { title: 7, key: 6, selected: 'false' },
  { title: 8, key: 7, selected: 'false' },
  ],
  vegetablesServingsSelected: 1,
  vegetablesRemindMe: [
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
  vegetablesRemindMeSelected: ['Daily'],
  vegetablesAt: '12:00',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VEGETABLES_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };

    case VEGETABLES_REMIND_ME_CHANGED:
    return update(state, {
      vegetablesRemindMe: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case VEGETABLES_REMIND_ME_SELECTED_ADD :
    return {
        ...state,
        vegetablesRemindMeSelected: [...state.vegetablesRemindMeSelected, action.payload]
    };
    case VEGETABLES_REMIND_ME_SELECTED_DELETE :
    return {
        ...state,
         vegetablesRemindMeSelected:
         state.vegetablesRemindMeSelected.filter(item => item !== action.payload),
    };
    case VEGETABLES_DAYS_CHANGED:
    return update(state, {
      vegetablesDays: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case VEGETABLES_SERVINGS_CHANGED:
    return update(state, {
      vegetablesServings: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    default:
      return state;
  }
};
