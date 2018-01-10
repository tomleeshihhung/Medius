import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { DailyPress, DailyCalendar } from '../components';
import {
  goalsChanged,
  dailyPointsAdd,
  dailyLeftMinus,
  dailyGoalDelete,
  dailyGoalCompletedAdd,
  dailyGoalCompletedDelete,
  dailyGoalIncompleteDelete,
  dailyGoalIncompleteAdd,
  dailyGoalPropChange,
} from './GoalsList/goalsActions';
import { userPointsAdd } from '../actions';

class DailyListItem extends Component {
  state = { pressed: true, day: moment(new Date()).format('YYYY-MM-DD') }

  componentDidMount() {
        const today = moment(new Date()).format('YYYY-MM-DD');
        const { key } = this.props.data;
        const completed =
        this.props.dailyGoal[key].completed.filter(item => item === today);
        const incomplete =
        this.props.dailyGoal[key].incomplete.filter(item => item === today);
        if (completed.length === 0 && incomplete.length === 0) {
          this.setState({ pressed: false });
          this.props.goalsChanged({ prop: 'dailyDay', value: today });
        }
  }

  onPressCheck= () => {
    console.log('onpresscheck triggered');
  const { key } = this.props.data;
  const completed =
  this.props.dailyGoal[key].completed.filter(item => item === this.props.dailyDay);
  const incomplete =
  this.props.dailyGoal[key].incomplete.filter(item => item === this.props.dailyDay);
      //adding points if the day hasn't been checked in yet
  if (completed.length === 0 && incomplete.length === 0) {
    this.props.userPointsAdd({ prop: 'points', value: 50 });
    this.props.dailyPointsAdd({ key, value: 50 });
    this.props.dailyLeftMinus({ key }); //this is for fixing listitem key bug
  }
  // adding the date to completed, after removing it from incomplete if it exists
  // nothing is done if date already exists in completed
  if (completed.length === 1) {
    console.log('date already exists');
  } else {
    if (incomplete.length === 1) {
    this.props.dailyGoalIncompleteDelete({ key: this.props.data.key, value: this.props.dailyDay });
    }
    this.props.dailyGoalCompletedAdd({ key, value: this.props.dailyDay });
  }
  // When the 7th block is pressed, it doesn't scroll to the next page

  const difference = moment(this.props.dailyDay).diff(this.props.data.startDate, 'days');
  /*
  if (difference === 6) {
    const minusDay = moment(this.props.dailyDay).subtract(1, 'd').format('YYYY-MM-DD');
    this.props.goalsChanged({ prop: 'dailyDay', value: minusDay });
  }
  */
  // when the last block is pressed, it shows completed modal
  if (difference === 13) {
    this.props.dailyGoalPropChange({ key: this.props.data.key, prop: 'finished', value: true });
  }
  this.setState({ pressed: true });
  }

  onPressX= () => {
    console.log('onpressX triggered');
    const { key } = this.props.data;
    const completed =
    this.props.dailyGoal[key].completed.filter(item => item === this.props.dailyDay);
    const incomplete =
    this.props.dailyGoal[key].incomplete.filter(item => item === this.props.dailyDay);
    //adding points if the day hasn't been checked in yet
    if (completed.length === 0 && incomplete.length === 0) {
      this.props.userPointsAdd({ prop: 'points', value: 50 });
      this.props.dailyPointsAdd({ key, value: 50 });
      this.props.dailyLeftMinus({ key });
    }
    if (incomplete.length === 1) {
      console.log('date already exists');
    } else {
      if (completed.length === 1) {
      this.props.dailyGoalCompletedDelete({ key: this.props.data.key, value: this.props.dailyDay });
      }
      this.props.dailyGoalIncompleteAdd({ key, value: this.props.dailyDay });
    }
    // When the 7th block is pressed, it doesn't scroll to the next page
    const difference = moment(this.props.dailyDay).diff(this.props.data.startDate, 'days');
    if (difference === 6) {
      const minusDay = moment(this.props.dailyDay).subtract(1, 'd').format('YYYY-MM-DD');
      this.props.goalsChanged({ prop: 'dailyDay', value: minusDay });
    }
    this.setState({ pressed: true });
  }
  onPressUncheck= async (day) => {
  await this.props.goalsChanged({ prop: 'dailyDay', value: day });
  const today = moment(new Date()).format('YYYY-MM-DD');
  const dayDifference = moment(this.props.dailyDay).diff(today, 'days');
  //if (dayDifference <= 0) {
  this.setState({ pressed: false });
  //}
  }
  firstDay= () => {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const difference = moment(today).diff(this.props.data.startDate, 'days');
  if (difference >= 6) {
    const firstDay = moment(today).subtract(6, 'd').format('YYYY-MM-DD');
    return firstDay;
  }
  return this.props.data.startDate;
  }

  render() {
    const { key } = this.props.data;
    if (this.state.pressed === false) {
    return (
      <DailyPress
      title={this.props.dailyGoal[key].title}
      value={this.props.dailyGoal[key].serving}
      onPressX={this.onPressX} onPressCheck={this.onPressCheck}
      day={this.props.dailyDay}
      number={key}
      onPressMore={() => this.props.onPressMore(key)}
    //  onPressCompleted={() => this.props.onPressCompleted()}
      />
    );
  }
    return (
      <DailyCalendar
      data={this.props.dailyGoal}
      number={key}
      title={this.props.dailyGoal[key].title} firstDay={this.props.data.startDate}
      serving={this.props.dailyGoal[key].serving}
      day={this.props.dailyGoal[key].day}
      dailyDay={this.props.dailyDay}
      action={(a) => this.onPressUncheck(a)}
      onPressMore={() => this.props.onPressMore(key)}
      onPressCompleted={() => this.props.onPressCompleted()}
      />
    );
  }

}
const mapStateToProps = (state) => {
  return {
    goals: state.goals,
    dailyGoal: state.goals.dailyGoal,
    finished: state.goals.dailyGoal.finished,
    dailyDay: state.goals.dailyDay,
    goalsIncomplete: state.goalsIncomplete,
  };
};

export default connect(mapStateToProps, {
  goalsChanged,
  userPointsAdd,
  dailyGoalDelete,
  dailyPointsAdd,
  dailyLeftMinus,
  dailyGoalCompletedAdd,
  dailyGoalCompletedDelete,
  dailyGoalIncompleteDelete,
  dailyGoalIncompleteAdd,
  dailyGoalPropChange
})(DailyListItem);
