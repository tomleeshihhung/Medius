import React from 'react';
import { StyleSheet, View } from 'react-native';
//import { responsiveFontSize } from 'react-native-responsive-dimensions';

const RatingBlock = ({ color }) => {
  const { ratingsContainer } = styles;
  return (
    <View style={[ratingsContainer, { backgroundColor: color }]} />
  );
};

const styles = StyleSheet.create({
  ratingsContainer: {
   height: 20,
   width: 20,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'orange',
   borderRadius: 5
  },

});
export default RatingBlock;
