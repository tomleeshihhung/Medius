import update from 'react-addons-update';
import {
  PROTEIN_CHANGED,
  PROTEIN_REMIND_ME_CHANGED,
  PROTEIN_REMIND_ME_SELECTED_ADD,
  PROTEIN_REMIND_ME_SELECTED_DELETE,
  PROTEIN_DAYS_CHANGED,
  PROTEIN_SERVINGS_CHANGED,
} from '../../screens/GoalsList/goalsTypes';

const INITIAL_STATE = {
  RemindMe: '',
  proteinDays: [
  { title: '1', key: 0, selected: 'false' },
  { title: '2', key: 1, selected: 'false' },
  { title: '3', key: 2, selected: 'false' },
  { title: '4', key: 3, selected: 'false' },
  { title: '5', key: 4, selected: 'false' },
  { title: '6', key: 5, selected: 'false' },
  { title: 'Daily', key: 6, selected: 'false' },
  ],
  proteinDaysSelected: 'Daily',

  proteinServings: [
  { title: '1', key: 0, selected: 'false' },
  { title: '2', key: 1, selected: 'false' },
  { title: '3', key: 2, selected: 'false' },
  { title: '4', key: 3, selected: 'false' },
  { title: '5', key: 4, selected: 'false' },
  { title: '6', key: 5, selected: 'false' },
  { title: '7', key: 6, selected: 'false' },
  { title: '8', key: 7, selected: 'false' },
  ],
  proteinServingsSelected: '',

  proteinRemindMe: [
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
  proteinRemindMeSelected: ['Daily'],
  proteinAt: '12:00',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROTEIN_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };

    case PROTEIN_REMIND_ME_CHANGED:
    return update(state, {
      proteinRemindMe: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case PROTEIN_REMIND_ME_SELECTED_ADD :
    return {
        ...state,
        proteinRemindMeSelected: [...state.proteinRemindMeSelected, action.payload]
    };
    case PROTEIN_REMIND_ME_SELECTED_DELETE :
    return {
        ...state,
         proteinRemindMeSelected:
         state.proteinRemindMeSelected.filter(item => item !== action.payload),
    };
    case PROTEIN_DAYS_CHANGED:
    return update(state, {
      proteinDays: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    case PROTEIN_SERVINGS_CHANGED:
    return update(state, {
      proteinServings: {
        [action.payload.key]: {
          selected: { $set: action.payload.value }
        },
      }
    });
    default:
      return state;
  }
};
