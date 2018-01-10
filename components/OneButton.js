import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const OneButton = ({ onPress, title, buttonStyle, containerViewStyle, textStyle, select }) => {
  const { buttonContainerViewStyle, newButtonStyle, buttonTextStyle } = styles;
  const buttonColor = () => {
    if (select) {
      return { backgroundColor: '#009fff' };
    }
  };
  const buttonText = () => {
    if (select) {
      return { color: 'white' };
    }
  };

  return (
    <Button
      textStyle={[buttonTextStyle, textStyle, buttonText()]}
      title={title}
      buttonStyle={[newButtonStyle, buttonStyle, buttonColor()]}
      containerViewStyle={[buttonContainerViewStyle, containerViewStyle]}
      onPress={onPress}
    />

  );
};

const styles = StyleSheet.create({
  buttonContainerViewStyle: {
    width: '100%',
    marginLeft: 0,
    marginTop: 0,
    justifyContent: 'center',
  },
  newButtonStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontFamily: 'circular',
    color: '#65B4CE',
    fontSize: responsiveFontSize(2.4)
  }

});
export default OneButton;
