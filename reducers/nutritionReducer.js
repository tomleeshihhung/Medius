import {
  NUTRITION_CHANGED,
  NUTRITION_CALCULATE,
  NUTRITION_FINAL,
  DAIRY_CHANGED,
} from '../screens/Qs/NutritionQs/nutritionTypes';

const INITIAL_STATE = {
  vegeWeek1: 0,
  vegeDay2: 0,
  fruitWeek3: 0,
  fruitDay4: 0,
  proteinWeek5: 0,
  meatDay6: 0,
  nonMeatDay7: 0,
  dairyWeek8: 0,
  waterDay9: 0,
  dairyQ: 'none',
  currentScreen: 'none',
  vegetables: {
    value: 0,
    score: 0,
    status: 'Concerning',
  },
  fruits: {
    value: 0,
    score: 0,
    status: 'Poor',
  },
  proteins: {
    value: 0,
    score: 0,
    status: 'Concerning',
  },
  dairy: {
    value: 0,
    score: 0,
    status: 'Poor',
  },
  water: {
    value: 0,
    score: 0,
    status: 'Poor',
  },
  nutritionFinal: {
    value: 0,
    score: 0,
    status: 'Concerning',
  },
};

// , vegetables: action.payload.value *

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NUTRITION_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NUTRITION_CALCULATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NUTRITION_FINAL:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DAIRY_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
