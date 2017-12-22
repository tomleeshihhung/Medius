import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const AddMinusButtons = ({ onAdd, onMinus }) => {
  const { leftButtonContainerViewStyle, rightButtonContainerViewStyle,
     buttonStyle, buttonTextStyle } = styles;

  return (
    <View style={styles.buttonContainer}>
    <Button
      textStyle={buttonTextStyle}
      title={'-'}
      buttonStyle={buttonStyle}
      containerViewStyle={[leftButtonContainerViewStyle]}
      onPress={onMinus}
    />
    <Button
      textStyle={buttonTextStyle}
      title={'+'}
      buttonStyle={buttonStyle}
      containerViewStyle={[rightButtonContainerViewStyle]}
      onPress={onAdd}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  //  justifyContent: 'center',
  //  backgroundColor: 'red'
  },
  leftButtonContainerViewStyle: {
    width: '50%',
    marginLeft: 0,
    marginTop: 0,
    paddingLeft: 6,
    paddingRight: 10,
  //  justifyContent: 'space-around',
  },
  rightButtonContainerViewStyle: {
    width: '50%',
  //  height: 100,
    marginLeft: -5,
    marginRight: 0,
    marginTop: 0,
    paddingLeft: 0,
    paddingRight: 16,
  //  justifyContent: 'space-around',
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    width: '100%'
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#439DBB',
    fontSize: 35,
    fontFamily: 'circular',
  }

});
export default AddMinusButtons;
