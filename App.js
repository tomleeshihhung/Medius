import firebase from 'firebase';
import { Font, AppLoading } from 'expo';
import * as Animatable from 'react-native-animatable';
import { PersistGate } from 'redux-persist/lib/integration/react';
import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './store';
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
         GoalsTab, CompletedTab, Rewards, OnboardList } from './screens';
import { HealthNutrition } from './screens/HealthList';
import { CompletedNutrition } from './screens/CompletedList';
import { NewGoal } from './screens/GoalsList';
import GoalsSugar from './screens/GoalsList/Sugar/GoalsSugar';
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

const zoomOut = {
  0: {
      color: '#3C3E47'
    },
  0.5: {
    color: 'rgba(58, 189, 238, 0.5)'
  },
  1: {
    color: '#3C3E47'
  },

};

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

    Animatable.initializeRegistryWithDefinitions({
      zoomOut
    });
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
    const { persistor, store } = configureStore();
    if (this.state.fontLoaded) {
    const MainNavigator = TabNavigator({
      Welcome: {
        screen: Welcome,
      },
      Auth: { screen: Auth },
      NutritionQs: {
        screen: StackNavigator({
            NutritionQ: { screen: NutritionQs },
            NutritionQ1: { screen: NutritionQ1 },
            NutritionQ2: { screen: NutritionQ2 },
            NutritionQ3: { screen: NutritionQ3 },
            NutritionQ4: { screen: NutritionQ4 },
            NutritionQ5: { screen: NutritionQ5 },
            NutritionQ6: { screen: NutritionQ6 },
            NutritionQ7: { screen: NutritionQ7 },
            NutritionQ8: { screen: NutritionQ8 },
            NutritionQ9: { screen: NutritionQ9 },
          },
          {
            headerMode: 'none',
          }
          )
      },
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
          Daily: {
            screen: DailyTab,
            navigationOptions: {
              title: 'Daily',
              tabBarLabel: 'Daily',
              tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='calendar'
                  type='feather'
                  color={tintColor}
                  size={23}
                  //component={TouchableOpacity}
                />
              )
            }
         },
          Health: { //screen: HealthList
            screen: StackNavigator({
              HealthTab: { screen: HealthTab },
              HealthNutrition: { screen: HealthNutrition },
            },
            {
            headerMode: 'float',
            title: 'Health',
            }
            ),
            navigationOptions: {
              title: 'Health',
              tabBarLabel: 'Health',
              tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='activity'
                  type='feather'
                  color={tintColor}
                  size={23}
                  //component={TouchableOpacity}
                />
              )
            }
          },
          Goals: {
            screen: TabNavigator({
              GoalsTab: {
                screen: StackNavigator({
                  GoalsTab: { screen: GoalsTab, navigationOptions: { tabBarVisible: false } },
                  NewGoal: { screen: NewGoal, navigationOptions: { tabBarVisible: false } },
                }),
                lazy: true,
              },
              GoalsSugar: {
                screen: StackNavigator({
                  GoalsSugar: { screen: GoalsSugar, navigationOptions: { tabBarVisible: false } },
                  NewGoal: { screen: NewGoal, navigationOptions: { tabBarVisible: false } },
                }),
              },
            },
            ),
            navigationOptions: {
              title: 'Goals',
              tabBarLabel: 'Goals',
              tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='target'
                  type='feather'
                  color={tintColor}
                  size={23}
                  //component={TouchableOpacity}
                />
              )
            }
          },
          Completed: { //screen: HealthList
            screen: StackNavigator({
              CompletedTab: { screen: CompletedTab },
              CompletedNutrition: { screen: CompletedNutrition },
            },
            {
            headerMode: 'float',
            }
            ),
            navigationOptions: {
              title: 'Completed',
              tabBarLabel: 'Completed',
              tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='check-square'
                  type='feather'
                  color={tintColor}
                  size={23}
                  //component={TouchableOpacity}
                />
              )
            }
          },
          Rewards: { screen: Rewards,
            navigationOptions: {
              title: 'Rewards',
              tabBarLabel: 'Rewards',
              tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='award'
                  type='feather'
                  color={tintColor}
                  size={23}
                  //component={TouchableOpacity}
                />
              )
            }
           },

        },
        {

        tabBarPosition: 'bottom',
        //tabBarComponent: TabBarTop,
        tintColor: '#3abdee',
        backgroundColor: 'white',
        navigationOptions: {
          tabBarVisible: true,
        //  backgroundColor: 'white'
        },
        swipeEnabled: false,
        lazy: true,
        animationEnabled: false,
        tabBarOptions: {
          backgroundColor: 'white',
          activeTintColor: '#3abdee',  // Color of tab when pressed
          inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
          upperCaseLabel: false,
          scrollEnabled: true,
          indicatorStyle: {
            backgroundColor: 'white'
          },
          showIcon: true,
          iconStyle: {
            width: 25,
            height: 25,
          },
          labelStyle: {
            fontSize: Platform.OS === 'android' ? 10.5 : 10.5,
            width: Platform.OS === 'android' ? 80 : 55,
            height: Platform.OS === 'android' ? 14 : 12,
            marginTop: Platform.OS === 'android' ? -0.1 : 14.5,
            marginBottom: Platform.OS === 'android' ? -0.1 : 4,
            backgroundColor: 'white'
          },
          style: {
            //width: '100%',
            backgroundColor: 'white',
            height: (Platform.OS === 'android') ? 48 : 48,
            borderTopWidth: 1.5,
            borderTopColor: '#e6e6e6',
          },
          tabStyle: {
        //    width: 100,
            backgroundColor: 'white',
          },
        }
      //
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
      backgroundColor: 'white',
    }
    );

    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </PersistGate>
      </Provider>
    );
  }
  return <AppLoading />;
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  //  Platform.OS === 'android' ? Expo.Constants.statusBarHeight : undefined,
    backgroundColor: 'white'
  },
});
