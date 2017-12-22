import React from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { View, Modal, StyleSheet } from 'react-native';
import OneButton from './OneButton';


const GoalModalScreen = ({ children, visible, done, height }) => {
  const { newButtonStyle, middleInnerContainer,
    bottomInnerContainer, buttonTextStyle, containerStyle,
    innerContainerStyle, buttonContainerViewStyle } = styles;
  return (

  <Modal
    visible={visible}
    animationType='slide'
    transparent
    onRequestClose={() => {}}
  >
  <View style={containerStyle}>
  <View style={[innerContainerStyle, { height }]}>

  <View style={middleInnerContainer}>
  {children}
  </View>
  <View style={bottomInnerContainer}>
  <OneButton
  title='Set'
  buttonStyle={newButtonStyle}
  textStyle={buttonTextStyle}
  onPress={done}
  containerViewStyle={buttonContainerViewStyle}
  />
  </View>

  </View>
  </View>
  </Modal>
);
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
//    marginLeft: 20,
  //  marginLeft: 20,
  },
  innerContainerStyle: {
    height: '75%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  middleInnerContainer: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  //  paddingLeft: 8,
  },
  bottomInnerContainer: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: 'blue',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  //  lineHeight: 40
  },
  buttonContainerViewStyle: {
    width: '100%',
    paddingLeft: 15,
    //paddingTop: 20,
    marginTop: 0,
    justifyContent: 'center',
  },
  newButtonStyle: {
    backgroundColor: '#65B4CE',
    borderRadius: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: responsiveFontSize(2.4)
  }
});
export default GoalModalScreen;
