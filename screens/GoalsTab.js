import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { TabNavigator } from 'react-navigation';
import { Nutrition } from './GoalsList';
import { HeaderSection, BackButton, ForwardButton } from '../components';
import { goalsChanged } from './GoalsList/goalsActions';

import baseStyles from './baseStyles';

class GoalsTab extends Component {
  render() {
    this.props.goalsChanged({ prop: 'parentNavigation', value: this.props.navigation });
    const { container, contentContainer } = baseStyles;
    const MainNavigator = TabNavigator({
      Nutrition: { screen: Nutrition },
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

      <View style={container}>
      <HeaderSection
      subHeaderText='Goals'
      subSubHeaderText='Your personalised habit goals'
      />
      <HeaderSection
      left={<BackButton color='#3C3E47' containerStyle={styles.leftIcon} />}
      right={<ForwardButton color='#3C3E47' containerStyle={styles.rightIcon} />}
      center={<Text style={styles.textStyle}>Nutrition</Text>}
      centerTextStyle={{ color: '#6D707D' }}
      style={{ backgroundColor: '#FAFBFC' }}
      />
        <View style={contentContainer}>
        <MainNavigator />
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    nutritionFinal: state.nutrition.nutritionFinal,
  };
};


const styles = StyleSheet.create({
  leftIcon: {
    width: 40,
    marginLeft: -12,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },
  rightIcon: {
    width: 40,
    marginRight: -12,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },
  textStyle:
  {
  fontSize: responsiveFontSize(2.2),
  fontWeight: '500',
  paddingTop: 0,
  fontFamily: 'circular',
  color: '#3C3E47'
  },
});

export default connect(mapStateToProps, { goalsChanged })(GoalsTab);
