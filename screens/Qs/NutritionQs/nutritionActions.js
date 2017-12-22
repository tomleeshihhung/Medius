import {
  NUTRITION_CHANGED,
} from './nutritionTypes';

export const nutritionChanged = (payload) => {
  console.log('inside actions');
  return {
    type: NUTRITION_CHANGED,
    payload
  };
};
