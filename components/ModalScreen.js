import React from 'react';
import Modal from 'react-native-modal';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import OneButton from './OneButton';

const ModalScreen = ({ children, visible, title, done }) => {
  const { newButtonStyle, topInnerContainer, middleInnerContainer,
    bottomInnerContainer, buttonTextStyle,
    innerContainerStyle, buttonContainerViewStyle } = styles;
  return (

    /*
    <View style={subTopInnerContainer}>
    <Text style={{ fontSize: responsiveFontSize(2) }}> {subTitle} </Text>
    </View>
    */

  <Modal
    isVisible={visible}
    animationIn='slideInUp'
    backdropOpacity={0.5}
    style={{ margin: 15 }}
  >
  <TouchableWithoutFeedback onPress={done}>
  <View style={innerContainerStyle}>
  <View style={topInnerContainer}>
  <Text style={{ fontSize: responsiveFontSize(3) }}> {title} </Text>
  </View>
  <View
    style={{
      height: 1,
      width: '100%',
      backgroundColor: '#F0F0F0',
    }}
  />

  <View style={middleInnerContainer}>
  {children}
  </View>
  <View
    style={{
      height: 1,
      width: '100%',
      backgroundColor: '#F0F0F0',
    }}
  />
  <View style={bottomInnerContainer}>
  <OneButton
  title='Got it'
  buttonStyle={newButtonStyle}
  textStyle={buttonTextStyle}
  onPress={done}
  containerViewStyle={buttonContainerViewStyle}
  />
  </View>

  </View>
  </TouchableWithoutFeedback>
  </Modal>

);
};

const styles = StyleSheet.create({
  innerContainerStyle: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  topInnerContainer: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'red',
    paddingLeft: 5,
  },
  subTopInnerContainer: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  //  backgroundColor: 'green',
    paddingLeft: 5,
  },
  middleInnerContainer: {
    height: '65%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  //  backgroundColor: 'yellow',
    paddingLeft: 8,
  },
  bottomInnerContainer: {
    height: '19%',
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
  containerStyle: {
  //  backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
//    marginLeft: 20,
  //  marginLeft: 20,
  },
  buttonContainerViewStyle: {
    width: '100%',
    paddingLeft: 15,
    //paddingTop: 20,
    marginTop: 0,
    justifyContent: 'center',
  },
  newButtonStyle: {
    backgroundColor: '#009fff',
    borderRadius: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: responsiveFontSize(2.4)
  }
});
export default ModalScreen;
