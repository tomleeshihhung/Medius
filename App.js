import firebase from 'firebase';
import Expo, { Font, AppLoading } from 'expo';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { SugarQs, SugarQ1, SugarQ2, SugarQ3, SugarQ4 } from './screens/Qs/SugarQs';
import { ExerciseQs, ExerciseQ1,
         ExerciseQ2, ExerciseQ3, ExerciseQ4 } from './screens/Qs/ExerciseQs';
import { NutritionQs, NutritionQ1, NutritionQ2,
         NutritionQ3, NutritionQ4, NutritionQ5,
         NutritionQ6, NutritionQ7, NutritionQ8,
         NutritionQ9, DairyQ } from './screens/Qs/NutritionQs';
import { SleepQs } from './screens/Qs/SleepQs';
import { MoodQs } from './screens/Qs/MoodQs';
import { AlcoholSmokingQs } from './screens/Qs/AlcoholSmokingQs';
import { Auth, Welcome, DailyTab, HealthTab,
         GoalsTab, Completed, Rewards, OnboardList } from './screens';
import { Nutrition } from './screens/HealthList';
import { NewGoal } from './screens/GoalsList';
/*
          export AuthScreen from './AuthScreen';
          export Daily from './Daily';
          export Health from './Health';
          export Goals from './Goals';
          export Rewards from './Rewards';
          export SettingsScreen from './SettingsScreen';
          export Welcome from './Welcome';
          export OnboardList from './OnboardList';
          export GoalList from './GoalList';
*/

//const require = require('./assets/fonts/circular.ttf');

export default class App extends React.Component {
  state = { fontLoaded: false }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC0Q3edFLOYnEep_B1th6VLPN2KL_FVcWM',
      authDomain: 'one-time-password-be23e.firebaseapp.com',
      databaseURL: 'https://one-time-password-be23e.firebaseio.com',
      projectId: 'one-time-password-be23e',
      storageBucket: 'one-time-password-be23e.appspot.com',
      messagingSenderId: '177790404181'
    };
    firebase.initializeApp(config);
  }
  componentDidMount() {
    this.loadFont();
  }
  async loadFont() {
    await Font.loadAsync({
        'circular': require('./assets/fonts/circular.ttf'),
        'brown-light': require('./assets/fonts/brown-light.ttf'),
        'circular-bold': require('./assets/fonts/circular-bold.ttf'),
       });

       this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
    const MainNavigator = TabNavigator({
      Welcome: { screen: Welcome },
      Auth: { screen: Auth },
      Onboard: {
        screen: StackNavigator({
            OnboardList: { screen: OnboardList },
            SugarQs: { screen: SugarQs },
            SugarQ1: { screen: SugarQ1 },
            SugarQ2: { screen: SugarQ2 },
            SugarQ3: { screen: SugarQ3 },
            SugarQ4: { screen: SugarQ4 },
            NutritionQs: { screen: NutritionQs },
            NutritionQ1: { screen: NutritionQ1 },
            NutritionQ2: { screen: NutritionQ2 },
            NutritionQ3: { screen: NutritionQ3 },
            NutritionQ4: { screen: NutritionQ4 },
            NutritionQ5: { screen: NutritionQ5 },
            NutritionQ6: { screen: NutritionQ6 },
            NutritionQ7: { screen: NutritionQ7 },
            NutritionQ8: { screen: NutritionQ8 },
            NutritionQ9: { screen: NutritionQ9 },
            DairyQ: { screen: DairyQ },
            ExerciseQs: { screen: ExerciseQs },
            ExerciseQ1: { screen: ExerciseQ1 },
            ExerciseQ2: { screen: ExerciseQ2 },
            ExerciseQ3: { screen: ExerciseQ3 },
            ExerciseQ4: { screen: ExerciseQ4 },
            SleepQs: { screen: SleepQs },
            MoodQs: { screen: MoodQs },
            AlcoholSmokingQs: { screen: AlcoholSmokingQs },
          },
          {
            headerMode: 'none',
          }
          )
      },
      main: {
        screen: TabNavigator({
          Daily: { screen: DailyTab },
          Health: { //screen: HealthList
            screen: StackNavigator({
              HealthTab: { screen: HealthTab },
              Nutrition: { screen: Nutrition },
            },
            {
            headerMode: 'none',
            }
            ),
          },
          Goals: { //screen: HealthList
            screen: StackNavigator({
              GoalsTab: { screen: GoalsTab },
              NewGoal: { screen: NewGoal },
            },
            {
            headerMode: 'none',
            }
            ),
          },
          Completed: { screen: Completed },
          Rewards: { screen: Rewards },
        },
        {
        tabBarPosition: 'bottom',
        headerMode: 'none',
        tintColor: 'blue',
      //  backgroundColor: 'blue',
        }
      )
      }
    },
    {
      navigationOptions: {
        tabBarVisible: false,
      //  backgroundColor: 'white'
      },
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false,
      tabBarPosition: 'bottom',
    //  backgroundColor: 'white'
    }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
  return <AppLoading />;
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:
    Platform.OS === 'android' ? Expo.Constants.statusBarHeight : undefined,
    backgroundColor: 'white'
  },
});
