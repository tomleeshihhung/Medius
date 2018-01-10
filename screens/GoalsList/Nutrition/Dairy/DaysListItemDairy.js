import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import {
  dairyDaysChanged, dairyChanged
} from './goalsActionsDairy';
import {
  goalsChanged
} from '../../goalsActions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MODAL_HEIGHT = (SCREEN_HEIGHT * 0.6) - 20;
const IOS_LIST_HEIGHT = (MODAL_HEIGHT - ((MODAL_HEIGHT) * 0.2)) / 7;
const ANDROID_LIST_HEIGHT = (MODAL_HEIGHT - ((MODAL_HEIGHT) * 0.25)) / 7;
const LIST_HEIGHT = Platform.OS === 'android' ? ANDROID_LIST_HEIGHT : IOS_LIST_HEIGHT;

class DaysListItemDairy extends Component {
  state = { selectedList: [] }

  onPress = async () => {
    this.daysSelectedDays();
  }
  calculateStatus = (day) => {
  let a = 0;
  if (day === 'Daily') {
    a = 7;
  } else {
  a = Number(day);
  }
    if (a < 2) {
      return 'Poor';
    }
    if (a >= 2 && a < 4) {
      console.log('returning good');
      return 'Good';
    }
    if (a >= 4 && a <= 6) {
      console.log('returning great');
      return 'Great';
    }
    if (a >= 7) {
      console.log('returning excellent');
      return 'Excellent';
    }
  }
  daysSelectedDays = async () => {
    const { dairyDays, data } = this.props;
  //  this.props.dairyChanged({ prop: 'dairyDaysSelected', value: [] });

    if (dairyDays[data.key].selected === 'false') {
      const array = [0, 1, 2, 3, 4, 5, 6];
      await array.map((obj, i) => {
        return this.props.dairyDaysChanged({ key: i, value: 'false' });
      });
      this.props.dairyDaysChanged({ key: data.key, value: 'true' });
      this.props.dairyChanged({ prop: 'dairyDaysSelected', value: data.title });
      const newStatus = this.calculateStatus(data.title);
      this.props.goalsChanged({ prop: 'newStatus', value: newStatus });
    }
  }

  icon = () => {
    return (
      <View style={{ paddingBottom: 21 }}>
      <Icon
        name='ios-checkmark'
        type='ionicons'
        color={'#3C3E47'}
        size={25}
        component={TouchableOpacity}
      //  containerStyle={styles.iconContainerViewStyle}
        onPress={this.show}
      />
      </View>
    );
  }
  selectTick = () => {
    if (this.props.data.selected === 'true') {
      return (
        <View>
        <Icon
          name='md-checkmark'
          type='ionicon'
          color={'#3C3E47'}
          size={25}
          component={TouchableOpacity}
        //  containerStyle={styles.iconContainerViewStyle}
          onPress={this.show}
        />
        </View>
      );
    }
  }
  selectColor = () => {
    if (this.props.data.selected === 'true') {
      return (
        { color: '#3C3E47' }
      );
    }
  }

  render() {
    const { data } = this.props;
      return (
        <TouchableOpacity style={styles.container} onPress={() => this.onPress()} >
          <View style={styles.subContainer1}>
            <View style={styles.rowContainer1}>
            <Text
            style={[styles.textStyle, this.selectColor()]}
            >{data.title === 7 ? 'Daily' : data.title}</Text>
            </View>
            <View style={styles.rowContainer2}>
            {this.selectTick()}
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    height: LIST_HEIGHT,
    width: '100%',
    flexDirection: 'row',
  //  backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center'
  //  paddingLeft: 30,
  //  paddingRight: 30,
  },
  iconContainerViewStyle: {
    paddingTop: 1
  },
  subContainer1: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: 'yellow'
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  //  backgroundColor: 'red'
  },
  textStyle: {
    fontSize: responsiveFontSize(2.2),
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',

  },
  chevronStyle: {
    fontSize: responsiveFontSize(2.2),
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',

  },
  subTextStyle: {
    fontSize: responsiveFontSize(2),
  //  paddingTop: '3%',
  //  paddingBottom: '10%',
    color: '#6D707D',
  },
});
const mapStateToProps = (state) => {
  return {
    dairyDays: state.nutritionGoalsDairy.dairyDays,
    dairyDaysSelected: state.nutritionGoalsDairy.dairyDaysSelected,
    dairyServingsSelected: state.nutritionGoalsDairy.dairyServingsSelected,
  };
};

export default connect(mapStateToProps,
  { dairyDaysChanged,
    dairyChanged,
    goalsChanged
  })(DaysListItemDairy);
