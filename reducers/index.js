//import { combineReducers } from 'redux';
import auth from './authReducer';
import user from './userReducer';
import nutrition from './nutritionReducer';
import goals from './goalsReducer';
import nutritionGoalsVegetables from './NutritionGoals/nutritionGoalsVegetables';
import nutritionGoalsFruits from './NutritionGoals/nutritionGoalsFruits';
import nutritionGoalsProtein from './NutritionGoals/nutritionGoalsProtein';
import nutritionGoalsDairy from './NutritionGoals/nutritionGoalsDairy';
import nutritionGoalsWater from './NutritionGoals/nutritionGoalsWater';

export default ({
  auth,
  user,
  nutrition,
  goals,
  nutritionGoalsVegetables,
  nutritionGoalsFruits,
  nutritionGoalsProtein,
  nutritionGoalsDairy,
  nutritionGoalsWater,
});
