import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Platform
} from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ProgressDaily, AnimatedIcon } from '../components';

//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const LIST_HEIGHT = ((SCREEN_HEIGHT - 105) * (0.85)) / 2;

class DailyCalendar extends Component {
  componentDidMount() {
    const difference = moment(this.props.dailyDay).diff(this.props.firstDay, 'days');
    console.log(difference, 'difference');
    const firstDayScroll = (SCREEN_WIDTH / 7) * 0.5;
    const scrollAmount = difference - 6;
    const dayScroll = firstDayScroll + (scrollAmount * (SCREEN_WIDTH / 7));

    if (difference === 6) {
      console.log('6');
      console.log(firstDayScroll);
    if (Platform.OS === 'ios') {
      this.scrollView.scrollTo({ x: dayScroll, y: 0, animated: false });
    }
    if (Platform.OS === 'android') {
    setTimeout(() => { this.scrollView.scrollTo({ x: dayScroll, animated: false }); }, 0);
    }
    }
    if (difference > 6) {
      console.log('more than 6');
    if (Platform.OS === 'ios') {
      this.scrollView.scrollTo({ x: dayScroll, y: 0, animated: false });
    }
    if (Platform.OS === 'android') {
    setTimeout(() => { this.scrollView.scrollTo({ x: dayScroll, animated: false }); }, 0);
    }
    }
  }
  render() {
  const { title, firstDay, serving, day, action, number, data } = this.props;
  const checkTitleText = (a, b) => {
    if (day === 7) {
      if (a === 1) {
        return (
          <Text
          style={styles.textStyle}
          > {a} serving daily</Text>
        );
      }
      if (serving === undefined) {
        return (
          <Text
          style={styles.textStyle}
          > 1 serving daily</Text>
        );
      }
      return (
        <Text
        style={styles.textStyle}
        > {a} servings daily</Text>
      );
    }
    if (day === 1) {
      if (serving === 1) {
        return (
          <Text
          style={styles.textStyle}
          > {a} serving {b} day a week</Text>
        );
      }
      if (serving === undefined) {
        return (
          <Text
          style={styles.textStyle}
          > One serving {b} day a week</Text>
        );
      }
      return (
        <Text
        style={styles.textStyle}
        >{a} servings {b} day a week </Text>
      );
    }
      if (serving === undefined) {
        return (
          <Text
          style={styles.textStyle}
          >One serving {b} days a week</Text>
        );
      }
      if (serving === 1) {
        return (
          <Text
          style={styles.textStyle}
          >{a} serving {b} days a week</Text>
        );
      }
      return (
        <Text
        style={styles.textStyle}
        >{a} servings {b} days a week </Text>
      );
  };
  const firstDayDisplay = moment(firstDay).format('MM/DD');
  const checkDay = (a) => {
    return moment(firstDay).add(a - 1, 'd').format('ddd');
  };
  const today = moment(new Date()).format('YYYY-MM-DD');
  const checkIcon = () => {
    if (this.props.dailyGoal[number].finished === true) {
      return (
        <AnimatedIcon onPress={this.props.onPressCompleted} />
      );
    }
    return (
      <Icon
        name='more-horizontal'
        type='feather'
        color={'#3C3E47'}
        size={21}
        component={TouchableOpacity}
        onPress={this.props.onPressMore}
      />
    );
  };
  const checkColor = (a) => {
    const testDay = moment(firstDay).add((a - 1), 'd').format('YYYY-MM-DD');
    const completed = data[number].completed.filter(item => item === testDay);
    const incomplete = data[number].incomplete.filter(item => item === testDay);
    if (completed.length === 1) {
      return { backgroundColor: '#009fff' };
    }
    if (incomplete.length === 1) {
      return { backgroundColor: '#4CD964' };
    }
    return { backgroundColor: '#CECED2' };
  };
  const checkToday = (a) => {
    const testDay = moment(firstDay).add((a - 1), 'd').format('YYYY-MM-DD');
    const difference = moment(testDay).diff(this.props.firstDay, 'days');
    if (today === testDay) {
      return (
        <Text style={styles.smallTextStyle}>Today</ Text>
      );
    }
    if (testDay === firstDay && today !== testDay) {
        return (
          <Text style={styles.smallTextStyle}>Start</ Text>
        );
    }
    if (difference === 13) {
        return (
          <Text style={styles.smallTextStyle}>Finish</ Text>
        );
    }
  };

  const onPress = (a) => {
    const param = moment(firstDay).add((a - 1), 'd').format('YYYY-MM-DD');
    action(param);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>

        <View style={styles.subContainer1row1}>
          <Text style={styles.boldTextStyle}>{title} </Text>
          {checkTitleText(serving, day)}
        </View>
        <View style={styles.subContainer1row3}>
          {checkIcon()}
        </View>
    </View>
    <View style={styles.subContainer2}>
    <ScrollView
    ref={ref => { this.scrollView = ref; }}
    horizontal style={{ flex: 1 }}
    contentContainerStyle={{ width: SCREEN_WIDTH * 2 }}
    scrollEnabled
    showsHorizontalScrollIndicator={false}
    >
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(1, number)]} onPress={() => onPress(1)}
        key="1"
        >
        <Text style={styles.calendarTextStyle}>{firstDayDisplay}</ Text>
        {checkToday(1)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(2, number)]} onPress={() => onPress(2)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(2)}</ Text>
        {checkToday(2)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(3, number)]} onPress={() => onPress(3)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(3)}</ Text>
        {checkToday(3)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(4, number)]} onPress={() => onPress(4)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(4)}</ Text>
        {checkToday(4)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(5, number)]} onPress={() => onPress(5)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(5)}</ Text>
        {checkToday(5)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(6, number)]} onPress={() => onPress(6)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(6)}</ Text>
        {checkToday(6)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(7, number)]} onPress={() => onPress(7)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(7)}</ Text>
        {checkToday(7)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(8, number)]} onPress={() => onPress(8)}
        key="2"
        >
        <Text style={styles.calendarTextStyle}>{checkDay(8)}</ Text>
        {checkToday(8)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(9, number)]} onPress={() => onPress(9)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(9)}</ Text>
        {checkToday(9)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(10, number)]} onPress={() => onPress(10)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(10)}</ Text>
        {checkToday(10)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(11, number)]} onPress={() => onPress(11)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(11)}</ Text>
        {checkToday(11)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(12, number)]} onPress={() => onPress(12)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(12)}</ Text>
        {checkToday(12)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(13, number)]} onPress={() => onPress(13)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(13)}</ Text>
        {checkToday(13)}
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.subContainer2row, checkColor(14, number)]} onPress={() => onPress(14)}
        >
        <Text style={styles.calendarTextStyle}>{checkDay(14)}</ Text>
        {checkToday(14)}
        </TouchableOpacity>
    </ScrollView>
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
      <ProgressDaily value={(14 - this.props.dailyGoal[number].daysLeft) / 14} />
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
          <Text
          style={styles.textStyle}
          > {this.props.dailyGoal[number].points} points earned </Text>
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
          <Text style={styles.textStyle}> {this.props.dailyGoal[number].daysLeft} days left</Text>
        </View>
    </View>
    </View>

  );
}
}

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
    flex: 2.5,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
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
  //  flexDirection: 'row',
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer2row: {
    height: '100%',
    width: SCREEN_WIDTH / 7,
  //  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#009fff'
  },
  subContainer3: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
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
    paddingLeft: 20,
    paddingRight: 20,
  //  backgroundColor: 'yellow'
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  subContainer5: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
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
    fontSize: responsiveFontSize(1.95),
    fontFamily: 'circular',
    color: 'white',
  },
  smallTextStyle: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'circular',
    color: 'white',
  },
  textStyle: {
    fontSize: responsiveFontSize(1.95),
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
    dailyGoal: state.goals.dailyGoal,
    dailyPoints: state.goals.dailyPoints,
    dailyLeft: state.goals.dailyLeft,
  };
};

export default connect(mapStateToProps, {})(DailyCalendar);
