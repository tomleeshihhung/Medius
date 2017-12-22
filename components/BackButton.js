import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
//import { responsiveFontSize } from 'react-native-responsive-dimensions';


const BackButton = ({ onPress, color, containerStyle }) => {
  return (
    <View>
    <Icon
      name='ios-arrow-back'
      type='ionicon'
      color={color || 'white'}
      size={30}
      component={TouchableOpacity}
      containerStyle={[styles.iconContainerViewStyle, containerStyle]}
      onPress={onPress}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainerViewStyle: {
    width: 40,
    marginLeft: -13,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },
});
export default BackButton;
