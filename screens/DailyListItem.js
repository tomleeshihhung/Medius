import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DailyPress, DailyCalendar } from '../components';
import {
  goalsChanged,
  dailyGoalCompletedAdd,
  dailyGoalCompletedDelete,
  dailyGoalIncompleteDelete,
  dailyGoalIncompleteAdd
} from './GoalsList/goalsActions';

class DailyListItem extends Component {
  state = { pressed: false, day: moment(new Date()).format('YYYY-MM-DD'), x: true }

  onPressCheck= () => {
    console.log('onpresscheck triggered');
    console.log(`${this.props.dailyDay} dailyDay onpressCheck`);
    this.setState({ x: false });
  const { key } = this.props.data;
  const completed = this.props.dailyGoal[key].completed.filter(item => item === this.props.dailyDay);
  const incomplete = this.props.dailyGoal[key].incomplete.filter(item => item === this.props.dailyDay);
  if (completed.length === 1) {
    console.log('date already exists');
  } else {
    if (incomplete.length === 1) {
    this.props.dailyGoalIncompleteDelete({ key: this.props.data.key, value: this.props.dailyDay });
    }
    this.props.dailyGoalCompletedAdd({ key, value: this.props.dailyDay });
  }
  this.setState({ pressed: true });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data.incomplete.length !== this.props.data.incomplete.length) {
     console.log(nextProps.data.incomplete, 'in props for incomplete');
     console.log(nextProps.data.completed, 'in props for completed');
     console.log(this.props.data.completed, 'in data for completed');
     debugger;
    }
    if(nextProps.data.completed.length !== this.props.data.completed.length) {
      console.log(nextProps.data.completed, 'in props for completed');
      console.log(nextProps.data.incomplete, 'in props for incomplete');
      console.log(this.props.data.incomplete, 'in data for incomplete');
      debugger;
    }
  }

  onPressX= () => {
    console.log('onpressx triggered');
    console.log(`${this.props.dailyDay} dailyDay onpressX`);
    const { key } = this.props.data;
    this.setState({ x: false });
    const completed = this.props.dailyGoal[key].completed.filter(item => item === this.props.dailyDay);
    console.log(completed, 'on X')
    const incomplete = this.props.dailyGoal[key].incomplete.filter(item => item === this.props.dailyDay);
    console.log(incomplete, 'on Y');
    if (incomplete.length === 1) {
      console.log('date already exists');
    } else {
      if (completed.length === 1) {
      this.props.dailyGoalCompletedDelete({ key: this.props.data.key, value: this.props.dailyDay });
      }
      this.props.dailyGoalIncompleteAdd({ key, value: this.props.dailyDay });
    }
    this.setState({ pressed: true });
  }
  onPressUncheck= (day) => {
  this.props.goalsChanged({ prop: 'dailyDay', value: day });
  this.setState({ pressed: false });
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
    if (this.state.pressed === false) {
    return (
      <DailyPress
      title={this.props.data.title} value={this.props.data.serving}
      onPressX={this.onPressX} onPressCheck={this.onPressCheck}
      day={this.props.dailyDay}
      number={this.props.data.key}
      />
    );
  }
    return (
      <DailyCalendar
      data={this.props.dailyGoal}
      number={this.props.data.key}
      title={this.props.data.title} firstDay={this.firstDay()}
      serving={this.props.data.serving} day={this.props.data.day}
      action={(a) => this.onPressUncheck(a)}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dailyGoal: state.goals.dailyGoal,
    dailyDay: state.goals.dailyDay
  };
};

export default connect(mapStateToProps, {
  goalsChanged,
  dailyGoalCompletedAdd,
  dailyGoalCompletedDelete,
  dailyGoalIncompleteDelete,
  dailyGoalIncompleteAdd,
})(DailyListItem);
