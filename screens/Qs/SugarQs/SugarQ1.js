import { Constants } from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import ProgressBar from 'react-native-progress/Bar';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PROGRESS_WIDTH = (SCREEN_WIDTH) - 60;

class SugarQ1 extends Component {
  render() {
    const { container, contentContainer,
      iconContainerViewStyle, buttonContainerViewStyle, titleSection,
    categorySection, headerSection, buttonStyle,
    textSection, lastSection, buttonTextStyle, textStyle } = styles;
    const { dispatch, navigate } = this.props.navigation;
    const backAction = NavigationActions.back({
  key: null
});
    return (
      <View style={container}>
        <View style={headerSection}>
          <Icon
            name='ios-arrow-back'
            type='ionicon'
            color='white'
            size={30}
            component={TouchableOpacity}
            containerStyle={iconContainerViewStyle}
            onPress={() => dispatch(backAction)}
          />
        </View>
        <View style={contentContainer}>
          <View style={titleSection}>
          <ProgressBar
          progress={0.25} width={PROGRESS_WIDTH} height={7} unfilledColor='white' borderWidth={0}
          />
          </View>
          <View style={textSection}>
          <Text style={textStyle}>
          {'How many times a week do you eat vegetables with your meals? (Not including hot chips)'}
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
          <Button
            textStyle={buttonTextStyle}
            title={'Next'}
            buttonStyle={buttonStyle}
            containerViewStyle={[buttonContainerViewStyle]}
            onPress={() => navigate('SugarQ2')}
          />
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentContainer: {
    flex: 1,
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
    paddingLeft: 10,
    paddingRight: 10,
  //   backgroundColor: 'yellow'
  },
  textSection:
  {
    height: '10%',
  //  justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
//    backgroundColor: 'yellow'
  },
  smallTextStyle: {
    color: 'white',
    fontSize: 16,
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
    fontSize: 20,
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
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  statusBarApple: {
    height: 20,
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

export default SugarQ1;
