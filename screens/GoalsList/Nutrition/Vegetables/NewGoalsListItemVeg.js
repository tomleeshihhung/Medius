import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet,
  Dimensions, TouchableOpacity, FlatList, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
//import { Icon } from 'react-native-elements';
import { GoalModalScreen } from '../../../../components';
import {
  RemindMeListItemVeg, ServingsListItemVeg, DaysListItemVeg
} from '../../Nutrition/Vegetables';
import { vegetablesChanged } from './goalsActionsVeg';
import { goalsChanged, dailyGoalAdd } from '../../goalsActions';


const SCREEN_HEIGHT = (Dimensions.get('window').height) - 20;
const LIST_HEIGHT =
Platform.OS === 'android' ? (SCREEN_HEIGHT - 189) / 7.5 : (SCREEN_HEIGHT - 172) / 7.5;
//const LIST_HEIGHT =
//Platform.OS === 'android' ? (SCREEN_HEIGHT - 177) / 6 : (SCREEN_HEIGHT - 157) / 6;

const todayDate = moment(new Date()).format('YYYY-MM-DD');
//const { dispatch, /* navigate  */} = this.props.navigation;

class NewGoalsListItem extends Component {
  state = { showModalDayPicker: false, goalModalHeight: '75%', date: '12:00' };
  onPress = async () => {
    if (this.props.data.option === 'Days a week') {
      this.setState({ goalModalHeight: '60%' });
      this.setState({ showModalDayPicker: true });
    }
    if (this.props.data.option === 'Remind me') {
      this.setState({ goalModalHeight: '68%' });
      this.setState({ showModalDayPicker: true });
    }
    if (this.props.data.option === 'Servings a day') {
      this.setState({ goalModalHeight: '68%' });
      this.setState({ showModalDayPicker: true });
    }
    if (this.props.data.option === 'At') {
      this.datePicker.onPressDate();
      this.setState({ showModalDayPicker: true });
    }
    if (this.props.data.option === 'Start Goal') {
      const count = this.props.dailyGoal.length;
      this.props.dailyGoalAdd({
      title: 'Vegetables',
      day: this.props.vegetablesDaysSelected,
      serving: this.props.vegetablesServingsSelected,
      remindMe: this.props.vegetablesRemindMeSelected,
      friends: 0,
      startDate: todayDate,
      daysLeft: 14,
      key: count,
      completed: [],
      incomplete: [],
      points: 0,
      finished: false,
      });
      this.props.goalsChanged({ prop: 'dailyDay', value: todayDate });
      this.props.parentNavigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'GoalsTab' })
          ]
      }));
      this.props.parentNavigation.navigate('Daily');
/*
      this.props.navigation.dispatch(NavigationActions.reset(
     { index: 0, actions: [NavigationActions.navigate({ routeName: 'Menu' })]
   }));
   */
    }
  }
  doneDayPicker = () => {
    this.setState({ showModalDayPicker: false });
  }

  listValue = () => {
    if (this.props.data.option === 'At') {
      return (
      <View style={styles.subContainer2}>
        <DatePicker
         style={{
           borderWidth: 1,
           borderColor: 'white',
           height: LIST_HEIGHT,
           width: '45%',
           justifyContent: 'center'
         }}
         date={this.props.vegetablesAt}
         customStyles={{ dateInput: { borderWidth: 0 }, dateText: styles.datePickerTextStyle }}
         mode="time"
         showIcon={false}
         placeholder="Pick a time"
         confirmBtnText="Set time"
         cancelBtnText="Cancel"
         onDateChange={
           (date) => { this.props.vegetablesChanged({ prop: 'vegetablesAt', value: date }); }}
         ref={(picker) => { this.datePicker = picker; }}
        />
        <Text style={this.startGoalCheckChevron()}>></Text>
      </ View>
    );
    }
    if (this.props.data.option === 'Days a week') {
      return (
        <View style={styles.subContainer2}>
        <Text
        style={styles.setGoalTextStyle}
        >{this.props.data.value === 7 ? 'Daily' : this.props.data.value}</Text>
          <Text style={this.startGoalCheckChevron()}>></Text>
        </ View>
      );
    }
    return (
      <View style={styles.subContainer2}>
      <Text
      style={styles.setGoalTextStyle}
      >{this.props.data.value}</Text>
        <Text style={this.startGoalCheckChevron()}>></Text>
      </ View>
    );
  }
  startGoalCheckChevron = () => {
    if (this.props.data.option === 'Start Goal') {
      return (
        styles.startGoalchevronStyle
      );
    }
    return (
      styles.chevronStyle
    );
  };
  flatList = () => {
    if (this.props.data.option === 'Remind me') {
      return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'flex-start' }}>
        <FlatList
          data={this.props.vegetablesRemindMe}
          extraData={this.props}
          renderItem={this.renderItemRemindMe}
          keyExtractor={(item) => item.key}
          ItemSeparatorComponent={this.flatListItemSeparator}
          scrollEnabled={false}
        />
      </View>
      );
    }
    if (this.props.data.option === 'Servings a day') {
      return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'flex-start' }}>
        <FlatList
          data={this.props.vegetablesServings}
          extraData={this.props}
          renderItem={this.renderItemServings}
          keyExtractor={(item) => item.key}
          ItemSeparatorComponent={this.flatListItemSeparator}
          scrollEnabled={false}
        />
      </View>
      );
    }
    if (this.props.data.option === 'Days a week') {
      return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'flex-start', borderRadius: 10 }}>
        <FlatList
          data={this.props.vegetablesDays}
          extraData={this.props}
          renderItem={this.renderItemDays}
          keyExtractor={(item) => item.key}
          ItemSeparatorComponent={this.flatListItemSeparator}
          scrollEnabled={false}
          style={{ borderRadius: 10 }}
        />
      </View>
      );
    }
  }
  flatListItemSeparator = () => {
    return (
      <View
        style={{
          //flex: 1,
          height: 1,
          backgroundColor: '#F0F0F0',
        }}
      />
    );
  }
  renderItemRemindMe(list) {
       return (
       <RemindMeListItemVeg
          data={list.item}
          onPress={this.onPress1}
        //  key={list.key}
       />
     );
  }
  renderItemDays(list) {
       return (
       <DaysListItemVeg
          data={list.item}
          onPress={this.onPress1}
        //  key={list.key}
       />
     );
  }
  renderItemServings(list) {
       return (
       <ServingsListItemVeg
          data={list.item}
          onPress={this.onPress1}
        //  key={list.key}
       />
     );
  }
  render() {
    const { data } = this.props;

    const startGoalCheckFont = () => {
      if (data.option === 'Start Goal') {
        return (
          styles.startGoalTextStyle
        );
      }
        return (
          styles.textStyle
        );
    };
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onPress()}>
      <GoalModalScreen
        visible={this.state.showModalDayPicker}
        done={this.doneDayPicker}
        title='Health benefits'
        height={this.state.goalModalHeight}
      >
      <View style={{ height: '3%' }} />
      {this.flatList()}

      </GoalModalScreen>
        <View style={styles.subContainer1}>
          <Text style={startGoalCheckFont()}>{data.option}{'   '}</Text>
        </View>
        {this.listValue()}
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: LIST_HEIGHT,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10
  //  paddingLeft: 30,
  //  paddingRight: 30,
  },
  iconContainerViewStyle: {
  //  paddingTop: 1
  },
  subContainer1: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 25
  //  alignItems: 'center',
  //  backgroundColor: 'green'
  },
  subContainer2: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 25,
  //  backgroundColor: 'blue'
  //  paddingRight: 10
  },
  rowContainer1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rowContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  stackedContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: '2%'
  },
  stackedContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '2%'
  },
  setGoalTextStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',

    paddingRight: responsiveWidth(5)
  },
  datePickerTextStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',

  },

  textStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3C3E47',

  },
  startGoalTextStyle: {
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3abdee',

  },
  startGoalchevronStyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3abdee',

  },
  chevronStyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3C3E47',

  },
  subTextStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'circular',
  //  paddingTop: '3%',
  //  paddingBottom: '10%',
    color: '#6D707D',
  },
  healthStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
    paddingTop: '10%',
    paddingBottom: '10%',
  //  color: checkColor(),
    paddingRight: 25
  }
});
const mapStateToProps = (state) => {
  return {
    vegetablesRemindMe: state.nutritionGoalsVegetables.vegetablesRemindMe,
    vegetablesRemindMeSelected: state.nutritionGoalsVegetables.vegetablesRemindMeSelected,
    vegetablesDays: state.nutritionGoalsVegetables.vegetablesDays,
    vegetablesDaysSelected: state.nutritionGoalsVegetables.vegetablesDaysSelected,
    vegetablesServings: state.nutritionGoalsVegetables.vegetablesServings,
    vegetablesServingsSelected: state.nutritionGoalsVegetables.vegetablesServingsSelected,
    vegetablesAt: state.nutritionGoalsVegetables.vegetablesAt,
    parentNavigation: state.goals.parentNavigation,
    dailyGoal: state.goals.dailyGoal,
    dailyKey: state.goals.dailyKey,
  };
};

export default connect(mapStateToProps, {
  vegetablesChanged, goalsChanged, dailyGoalAdd
})(NewGoalsListItem);
