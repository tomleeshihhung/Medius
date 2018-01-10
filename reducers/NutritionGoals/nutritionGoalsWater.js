import update from 'react-addons-update';
import {
  WATER_CHANGED,
  WATER_REMIND_ME_CHANGED,
  WATER_REMIND_ME_SELECTED_ADD,
  WATER_REMIND_ME_SELECTED_DELETE,
  WATER_SERVINGS_CHANGED,
} from '../../screens/GoalsList/Nutrition/Water/goalsTypesWater';

const INITIAL_STATE = {
  RemindMe: '',
  waterServings: [
  { title: 1, key: 0, selected: 'false' },
  { title: 2, key: 1, selected: 'false' },
  { title: 3, key: 2, selected: 'false' },
  { title: 4, key: 3, selected: 'false' },
  { title: 5, key: 4, selected: 'false' },
  { title: 6, key: 5, selected: 'false' },
  { title: 7, key: 6, selected: 'false' },
  { title: 8, key: 7, selected: 'false' },
  ],
  waterServingsSelected: 1,

  waterRemindMe: [
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
  waterRemindMeSelected: ['Daily'],
  waterAt: '12:00',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WATER_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };

    case WATER_REMIND_ME_CHANGED:
    return update(state, {
      waterRemindMe: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case WATER_REMIND_ME_SELECTED_ADD :
    return {
        ...state,
        waterRemindMeSelected: [...state.waterRemindMeSelected, action.payload]
    };
    case WATER_REMIND_ME_SELECTED_DELETE :
    return {
        ...state,
         waterRemindMeSelected:
         state.waterRemindMeSelected.filter(item => item !== action.payload),
    };
    case WATER_SERVINGS_CHANGED:
    return update(state, {
      waterServings: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    default:
      return state;
  }
};
