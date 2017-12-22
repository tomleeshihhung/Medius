import React from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { StyleSheet, View, Text } from 'react-native';
import RatingBlock from './RatingBlock';

const Ratings = () => {
  const { ratingsContainer, container } = styles;
  return (
    <View style={container}>
    <View style={ratingsContainer}>
    <RatingBlock color='#009fff' />
    <Text style={[styles.textStyle, { color: '#009fff' }]}>    Excellent</Text>
    </View>
    <View style={ratingsContainer}>
    <RatingBlock color='#1DE1B5' />
    <Text style={[styles.textStyle, { color: '#1DE1B5' }]}>    Great </Text>
    </View>
    <View style={ratingsContainer}>
    <RatingBlock color={'#FFD700'} />
    <Text style={[styles.textStyle, { color: '#FFD700' }]}>    Good </Text>
    </View>
    <View style={ratingsContainer}>
    <RatingBlock color={'#ff9b00'} />
    <Text style={[styles.textStyle, { color: '#FF8C00' }]}>    Poor </Text>
    </View>
    <View style={ratingsContainer}>
    <RatingBlock color={'#ff0000'} />
    <Text style={[styles.textStyle, { color: '#ff0000' }]}>    Concerning </Text>
    </View>
    <View style={ratingsContainer}>
    <RatingBlock color={'#B0B3C2'} />
    <Text style={[styles.textStyle, { color: '#B0B3C2' }]}>    Not Available </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'circular',
    fontSize: responsiveFontSize(2),
  },
  ratingsContainer: {
   height: '15%',
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',

  // backgroundColor: 'pink'
  },

});
export default Ratings;
