import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = ((SCREEN_HEIGHT - 93) * (0.8)) / 2;

const DailyPress = ({ title, value, onPressX, onPressCheck, day, onPressMore }) => {
  const checkDay = () => {
  const today = moment(new Date()).format('YYYY-MM-DD');
  if (day === today) {
    return <Text style={styles.textStyle}> today</ Text>;
  }
  return <Text style={styles.textStyle}> {moment(day).format('dddd').toLowerCase()}</ Text>;
  };
  const checkServing = () => {
  if (value === undefined) {
    return <Text style={styles.textStyle}>1 serving</ Text>;
  }
  if (value === 1) {
    return <Text style={styles.textStyle}>{value} serving</ Text>;
  }
    return <Text style={styles.textStyle}>{value} servings</ Text>;
  };
    //const today = moment(new Date()).format('YYYY-MM-DD');
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.subContainer1row1}>
          <Text
          style={styles.boldTextStyle}
          >{title} </Text>
          {checkServing()}{checkDay()}
        </View>
        <View style={styles.subContainer1row3}>
          <Icon
            name='more-horizontal'
            type='feather'
            color={'#3C3E47'}
            size={25}
            component={TouchableOpacity}
            onPress={onPressMore}
          />
        </View>
      </View>
      <View style={styles.subContainer2x}>
      <TouchableOpacity style={styles.subContainer2xRow1} onPress={onPressX}>
      <Icon
        name='x'
        type='feather'
        color={'white'}
        size={35}
      />
      </ TouchableOpacity>
      <TouchableOpacity style={styles.subContainer2xRow2} onPress={onPressCheck}>
      <Icon
        name='check'
        type='feather'
        color={'white'}
        size={35}
      />
      </ TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: LIST_HEIGHT,
    paddingTop: 5,
    borderRadius: 10,
  //  paddingLeft: 25,
  //  paddingRight: 25,
    backgroundColor: 'white'
  },
  subContainer1: {
    flex: 3,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
  //  paddingLeft: 20,
    justifyContent: 'center',
  //  backgroundColor: 'pink'
  },
  subContainer1row1: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: 'pink'
  },
  subContainer1row2: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: 'red'
  },
  subContainer1row3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  //  backgroundColor: 'yellow'
  },
  subContainer2x: {
    flex: 7.5,
    flexDirection: 'row',
  //  paddingLeft: 20,
    justifyContent: 'center',
  //  backgroundColor: 'pink',
  },
  subContainer2xRow1: {
    flex: 1,
    aspectRatio: 5 / 4,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  subContainer2xRow2: {
    flex: 1,
    aspectRatio: 5 / 4,
    backgroundColor: '#009fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  boldTextStyle: {
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'circular-bold',
  //  paddingTop: '10%',
    paddingRight: '2%',
    color: '#3C3E47',
  },
  textStyle: {
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'circular',
    color: '#3C3E47',
  },
});


export default DailyPress;
