import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistCombineReducers } from 'redux-persist';
import reducers from '../reducers';

const config = {
 key: 'root',
 storage: AsyncStorage,
 whitelist: ['auth', 'user',
 'nutrition',
 'goals',
 'nutritionGoalsVegetables',
 'nutritionGoalsFruits',
 'nutritionGoalsProtein',
 'nutritionGoalsDairy',
 'nutritionGoalsWater']
};

const reducer = persistCombineReducers(config, reducers);

export default function configureStore(initialState = {}) {
 const store = createStore(
     reducer,
     initialState,
     applyMiddleware(thunk)
 );

 const persistor = persistStore(store);
 persistor.purge();
 return { persistor, store };
}
