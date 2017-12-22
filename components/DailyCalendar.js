import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ProgressDaily } from '../components';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = (SCREEN_HEIGHT - 162) / 2;

const checkTitleText = (serving, day) => {
  if (day === 'Daily') {
    if (serving === 1) {
      return (
        <Text
        style={styles.textStyle}
        >{serving} serving daily</Text>
      );
    }
    return (
      <Text
      style={styles.textStyle}
      >{serving} servings daily</Text>
    );
  }
  if (day === 1) {
    if (serving === 1) {
      return (
        <Text
        style={styles.textStyle}
        >{serving} serving {day} day a week</Text>
      );
    }
    return (
      <Text
      style={styles.textStyle}
      >{serving} servings {day} day a week </Text>
    );
  }
    if (serving === 1) {
      return (
        <Text
        style={styles.textStyle}
        >{serving} serving {day} days a week</Text>
      );
    }
    return (
      <Text
      style={styles.textStyle}
      >{serving} servings {day} days a week </Text>
    );
};

const DailyCalendar = ({ title, firstDay, serving, day, action, number, data }) => {
  const firstDayDisplay = moment(firstDay).format('MM/DD');
  const secondDay = moment(firstDay).add(1, 'd').format('ddd');
  const thirdDay = moment(firstDay).add(2, 'd').format('ddd');
  const fourthDay = moment(firstDay).add(3, 'd').format('ddd');
  const fifthDay = moment(firstDay).add(4, 'd').format('ddd');
  const sixthDay = moment(firstDay).add(5, 'd').format('ddd');
  const seventhDay = moment(firstDay).add(6, 'd').format('ddd');
  const today = moment(new Date()).format('YYYY-MM-DD');

  const checkColor = (a) => {
    console.log(`${number} key`);
    const testDay = moment(firstDay).add(a, 'd').format('YYYY-MM-DD');
    const completed = data[0].completed.filter(item => item === testDay);
    const incomplete = data[0].incomplete.filter(item => item === testDay);
    if (completed.length === 1) {
      return { backgroundColor: '#4CD964' };
    }
    if (incomplete.length === 1) {
      return { backgroundColor: '#009fff' };
    }
    return { backgroundColor: '#CECED2' };
  };
  const checkToday = (a) => {
    const testDay = moment(firstDay).add(a, 'd').format('YYYY-MM-DD');
    if (today === testDay) {
      return (
        <Text style={styles.smallTextStyle}>Today</ Text>
      );
    }
  };

  const onPress = (a) => {
    const param = moment(firstDay).add(a, 'd').format('YYYY-MM-DD');
    action(param);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>

        <View style={styles.subContainer1row1}>
          <Text style={styles.boldTextStyle}>{title}</Text>
        </View>
        <View style={styles.subContainer1row2}>
          {checkTitleText(serving, day)}
        </View>
        <View style={styles.subContainer1row3}>
          <Icon
            name='more-horizontal'
            type='feather'
            color={'#3C3E47'}
            size={25}
            component={TouchableOpacity}
          //  containerStyle={{ paddingRight: 20 }}
          //  onPress={this.show}
          />
        </View>
    </View>
    <View style={styles.subContainer2}>
        <TouchableOpacity style={[styles.subContainer2row1, checkColor(0, number)]} onPress={() => onPress(0)}>
        <Text style={styles.calendarTextStyle}>{firstDayDisplay}</ Text>
        {checkToday(0)}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainer2row1, checkColor(1, number)]} onPress={() => onPress(1)}>
        <Text style={styles.calendarTextStyle}>{secondDay}</ Text>
        {checkToday(1)}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainer2row1, checkColor(2, number)]} onPress={() => onPress(2)}>
        <Text style={styles.calendarTextStyle}>{thirdDay}</ Text>
        {checkToday(2)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer2row4}>
        <Text style={styles.calendarTextStyle}>{fourthDay}</ Text>
        {checkToday(3)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer2row5}>
        <Text style={styles.calendarTextStyle}>{fifthDay}</ Text>
        {checkToday(4)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer2row6}>
        <Text style={styles.calendarTextStyle}>{sixthDay}</ Text>
        {checkToday(5)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer2row7}>
        <Text style={styles.calendarTextStyle}>{seventhDay}</ Text>
        {checkToday(6)}
        </TouchableOpacity>
    </View>
    <View style={styles.subContainer3}>
        <View style={styles.subContainer3row1}>
          <Icon
            name='plus'
            type='feather'
            color={'#3C3E47'}
            size={20}
            component={TouchableOpacity}
          //  containerStyle={{ paddingRight: 20 }}
          //  onPress={this.show}
          />
          <Text style={styles.textStyle}> 4 health benefits</Text>
        </View>

        <View style={styles.subContainer3row3}>
          <Icon
            name='users'
            type='feather'
            color={'#3C3E47'}
            size={20}
            component={TouchableOpacity}
          //  containerStyle={{ paddingRight: 20 }}
          //  onPress={this.show}
          />
          <Text style={styles.textStyle}> 5 friends</Text>
        </View>
    </View>
    <View style={styles.subContainer4}>
      <ProgressDaily value={1 / 9} />
    </View>
    <View style={styles.subContainer5}>
        <View style={styles.subContainer5row1}>
          <Icon
            name='award'
            type='feather'
            color={'#3C3E47'}
            size={20}
            component={TouchableOpacity}
          //  containerStyle={{ paddingRight: 20 }}
          //  onPress={this.show}
          />
          <Text style={styles.textStyle}> 50 points earned </Text>
        </View>
        <View style={styles.subContainer5row2}>
          <Icon
            name='calendar'
            type='feather'
            color={'#3C3E47'}
            size={20}
            component={TouchableOpacity}
          //  containerStyle={{ paddingRight: 20 }}
          //  onPress={this.show}
          />
          <Text style={styles.textStyle}> 22 days left</Text>
        </View>
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
  subContainer2: {
    flex: 2,
  //  backgroundColor: 'yellow',
    flexDirection: 'row',
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer2row1: {
    flex: 1,
  //  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#009fff'
  },
  subContainer2row2: {
    flex: 1,
  //  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#4CD964'
  },
  subContainer2row3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#4CD964'
  },
  subContainer2row4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#CECED2'
  },
  subContainer2row5: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#4CD964'
  },
  subContainer2row6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#009fff'
  },
  subContainer2row7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#4CD964'
  },
  subContainer3: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
  //  backgroundColor: 'pink'
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer3row1: {
    flex: 1,
  //  paddingLeft: 25,
    flexDirection: 'row',
//    backgroundColor: 'pink',
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer3row2: {
    flex: 1,
  //  paddingRight: 25,
  //  backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer3row3: {
    flex: 1,
  //  paddingRight: 25,
  //  backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer4: {
    flex: 0.5,
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  //  backgroundColor: 'yellow'
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer5: {
    flex: 2,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center',
    flexDirection: 'row',
  //  backgroundColor: 'pink'
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer5row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer5row2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  //  backgroundColor: 'red'
  },
  calendarTextStyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'circular',
    color: 'white',
  },
  smallTextStyle: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'circular',
    color: 'white',
  },
  textStyle: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3C3E47',
  },
  boldTextStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular-bold',
  //  paddingTop: '10%',
    paddingRight: '2%',
    color: '#3C3E47',
  },
});
const mapStateToProps = (state) => {
  return {
    dailyGoal: state.goals.dailyGoal
  };
};

export default connect(mapStateToProps, {})(DailyCalendar);
