import update from 'react-addons-update';
import {
  DAIRY_CHANGED,
  DAIRY_REMIND_ME_CHANGED,
  DAIRY_REMIND_ME_SELECTED_ADD,
  DAIRY_REMIND_ME_SELECTED_DELETE,
  DAIRY_DAYS_CHANGED,
} from '../../screens/GoalsList/Nutrition/Dairy/goalsTypesDairy';

const INITIAL_STATE = {
  RemindMe: '',
  dairyDays: [
  { title: 1, key: 0, selected: 'false' },
  { title: 2, key: 1, selected: 'false' },
  { title: 3, key: 2, selected: 'false' },
  { title: 4, key: 3, selected: 'false' },
  { title: 5, key: 4, selected: 'false' },
  { title: 6, key: 5, selected: 'false' },
  { title: 7, key: 6, selected: 'false' },
  ],
  dairyDaysSelected: 7,
  dairyRemindMe: [
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
  dairyRemindMeSelected: ['Daily'],
  dairyAt: '12:00',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DAIRY_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };

    case DAIRY_REMIND_ME_CHANGED:
    return update(state, {
      dairyRemindMe: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case DAIRY_REMIND_ME_SELECTED_ADD :
    return {
        ...state,
        dairyRemindMeSelected: [...state.dairyRemindMeSelected, action.payload]
    };
    case DAIRY_REMIND_ME_SELECTED_DELETE :
    return {
        ...state,
         dairyRemindMeSelected:
         state.dairyRemindMeSelected.filter(item => item !== action.payload),
    };
    case DAIRY_DAYS_CHANGED:
    return update(state, {
      dairyDays: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    default:
      return state;
  }
};
