import { Constants } from 'expo';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { OneButton, BackButton, HeaderSection } from '../../../components';


class NutritionQs extends Component {
  render() {
    const { container, contentContainer, titleSection,
    categorySection, lastSection,
    textSection, textStyle } = styles;
    const { dispatch, navigate } = this.props.navigation;
    const backAction = NavigationActions.back({
  key: null
});
    return (
      <View style={container}>
      <HeaderSection
      left={<BackButton onPress={() => dispatch(backAction)} />}
      />
      <View style={contentContainer}>
        <View style={titleSection}>
        <Text style={[textStyle, { fontWeight: 'bold', fontSize: responsiveFontSize(4) }]}>
        Nutrition
        </Text>
        </View>
        <View style={textSection}>
        <Text style={textStyle}>
        {'Help us understand your general diet to set your personalised Medius goals.'}
        </Text>
        </View>
        <View style={categorySection}>
        <Icon
          name='food-apple'
          type='material-community'
          color='#FFFFFF'
          size={150}
        />
        </View>
        <View style={lastSection}>
        <OneButton title={'Begin'} onPress={() => navigate('NutritionQ1')} />
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#65B4CE',
  //  paddingLeft: 30,
  //  paddingRight: 30,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  headerSection:
  {
    height: 44,
    justifyContent: 'flex-start',
   //backgroundColor: 'red'
  },
  titleSection:
  {
    height: '10%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  //  paddingLeft: 10,
  //  paddingRight: 10,
  //   backgroundColor: 'yellow'
  },
  textSection:
  {
    height: '10%',
  //  justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 10,
  //  paddingLeft: 10,
  //  paddingRight: 10,
//    backgroundColor: 'yellow'
  },
  categorySection: {
    height: '65%',
    justifyContent: 'center',
//    backgroundColor: 'blue'
  //  justifyContent: 'stretch',
  //  alignItems: 'stretch'
  },
  lastSection: {
    height: '15%',
  //  backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.4),
  },
  iconContainerViewStyle: {
    width: 40,
    marginLeft: 0,
    paddingLeft: 0,
  },
  buttonContainerViewStyle: {
    width: '100%',
    marginLeft: 0,
    marginTop: 0,
//    paddingLeft: 10,
//    paddingRight: 10,
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#439DBB',
  }

});

export default NutritionQs;
