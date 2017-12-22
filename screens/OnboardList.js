import React, { Component } from 'react';
import { Constants } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


class OnboardList extends Component {
  static navigationOptions = () => ({
    title: 'Your first goal',
    header: null
  });
  render() {
    //{'\n'}
    const { container, containerViewStyle, categorySection,
    buttonStyle, textSection, buttonTextStyle, textStyle } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
      <View style={styles.titleSection}>
      <Text style={[textStyle, { fontWeight: 'bold', fontSize: responsiveFontSize(4), }]}>
      Your very first goal
      </Text>
      </View>
      <View style={textSection}>
      <Text style={textStyle}>
      {'Pick a category to get started.'} {" We'll help you find the goal that best fits you."}
      </Text>
      </View>


      <View style={categorySection}>
        <Button
          textStyle={buttonTextStyle}
          title={'Sugar Intake'}
          buttonStyle={buttonStyle}
          containerViewStyle={[containerViewStyle]}
          onPress={() => navigate('SugarQs')}
        />
        <Button
          textStyle={buttonTextStyle}
          title={'Nutrition'}
          buttonStyle={buttonStyle}
          containerViewStyle={containerViewStyle}
          onPress={() => navigate('NutritionQs')}
        />
        <Button
          textStyle={buttonTextStyle}
          title={'Exercise'}
          buttonStyle={buttonStyle}
          containerViewStyle={containerViewStyle}
          onPress={() => navigate('ExerciseQs')}
        />
        <Button
          textStyle={buttonTextStyle}
          title={'Sleep'}
          buttonStyle={buttonStyle}
          containerViewStyle={containerViewStyle}
          onPress={() => navigate('SleepQs')}
        />
        <Button
          textStyle={buttonTextStyle}
          title={'Mood'}
          buttonStyle={buttonStyle}
          containerViewStyle={containerViewStyle}
          onPress={() => navigate('MoodQs')}
        />
        <Button
          textStyle={buttonTextStyle}
          title={'Alcohol & Smoking'}
          buttonStyle={buttonStyle}
          containerViewStyle={containerViewStyle}
          onPress={() => navigate('AlcoholSmokingQs')}
        />
      </View>
      <View style={styles.lastSection}>
      <Button
        textStyle={buttonTextStyle}
        title={'Let me pick from a list of goals'}
        buttonStyle={buttonStyle}
        containerViewStyle={[styles.lastContainerViewStyle]}
        onPress={() => navigate('GoalList')}
      />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleSection:
  {
    height: '15%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',

  //   backgroundColor: 'yellow'
  },
  textSection:
  {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //paddingTop: responsiveHeight(1),
//    backgroundColor: 'yellow'
  },
  textStyle: {
    color: 'white',
    fontFamily: 'circular',
    fontSize: responsiveFontSize(2.5),
  },
  categorySection: {
    height: '55%',
    justifyContent: 'center',
  //  alignItems: 'stretch'
  },
  lastSection: {
    height: '15%',
   // backgroundColor: 'red'
//    justifyContent: 'space-around',
  //  alignItems: 'stretch'
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#65B4CE',
    paddingLeft: 30,
    paddingRight: 30,
  },
  containerViewStyle: {
    width: '100%',
    marginLeft: 0,
    marginTop: 5,
  },
  lastContainerViewStyle: {
    width: '100%',
    marginLeft: 0,

  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#439DBB',
    fontFamily: 'circular',
    fontSize: responsiveFontSize(2.2)
  }

});
export default OnboardList;
