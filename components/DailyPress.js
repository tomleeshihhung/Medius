import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = (SCREEN_HEIGHT - 162) / 2;

const DailyPress = ({ title, value, onPressX, onPressCheck, day }) => {
  const checkDay = () => {
  const today = moment(new Date()).format('YYYY-MM-DD');
  if (day === today) {
    return 'today';
  }
  return moment(day).format('dddd').toLowerCase();
};
    //const today = moment(new Date()).format('YYYY-MM-DD');
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.subContainer1row1}>
          <Text
          style={styles.boldTextStyle}
          >{title}</Text>
        </View>
        <View style={styles.subContainer1row2}>
        <Text
        style={styles.boldTextStyle}
        >{value} serving </Text>
        <Text
        style={styles.boldTextStyle}
        >{checkDay()} </Text>
        </View>
        <View style={styles.subContainer1row3}>
          <Icon
            name='more-horizontal'
            type='feather'
            color={'#3C3E47'}
            size={25}
            component={TouchableOpacity}
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
    marginTop: 5,
  //  paddingLeft: 25,
  //  paddingRight: 25,
    backgroundColor: 'white'
  },
  subContainer1: {
    flex: 3,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
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
    backgroundColor: '#009fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  subContainer2xRow2: {
    flex: 1,
    aspectRatio: 5 / 4,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  boldTextStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular-bold',
  //  paddingTop: '10%',
    paddingRight: '2%',
    color: '#3C3E47',
  },
});


export default DailyPress;
