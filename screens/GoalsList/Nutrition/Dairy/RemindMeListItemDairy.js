import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import {
  dairyRemindMeChanged, dairyRemindMeSelectedAdd,
  dairyRemindMeSelectedDelete, dairyChanged
} from './goalsActionsDairy';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MODAL_HEIGHT = (SCREEN_HEIGHT * 0.68) - 20;
const IOS_LIST_HEIGHT = (MODAL_HEIGHT - ((MODAL_HEIGHT) * 0.2)) / 9;
const ANDROID_LIST_HEIGHT = (MODAL_HEIGHT - ((MODAL_HEIGHT) * 0.25)) / 9;
const LIST_HEIGHT = Platform.OS === 'android' ? ANDROID_LIST_HEIGHT : IOS_LIST_HEIGHT;
class RemindMeListItemDairy extends Component {
  state = { selectedList: [] }

  onPress = async () => {
    //this.addDeleteSelectedDays();
    const { dairyRemindMe, data } = this.props;
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (data.key === 0) {
      // When Daily is checked, all the days are checked
      if (dairyRemindMe[data.key].selected === 'false') {
        await array.map((obj, i) => {
          return this.props.dairyRemindMeChanged({ key: i, value: 'true' });
        });
        await this.props.dairyRemindMeChanged({ key: 8, value: 'false' });
      } else {
        await array.map((obj, i) => {
          return this.props.dairyRemindMeChanged({ key: i, value: 'false' });
        });
      }
    } else if
      (dairyRemindMe[data.key].selected === 'false') {
        // When the last unchecked day is checked, Daily becomes checked too
        const result = dairyRemindMe.filter(word => word.selected !== 'true');
        if (result[0].key === 0 && result[1].key === data.key && result.length === 3) {
          await array.map((obj, i) => {
          return this.props.dairyRemindMeChanged({ key: i, value: 'true' });
          });
          await this.props.dairyRemindMeChanged({ key: 8, value: 'false' });
        } else if (data.key === 8) {
          await array.map((obj, i) => {
          return this.props.dairyRemindMeChanged({ key: i, value: 'false' });
          });
          await this.props.dairyRemindMeChanged({ key: (data.key), value: 'true' });
        } else {
        await this.props.dairyRemindMeChanged({ key: (data.key), value: 'true' });
        await this.props.dairyRemindMeChanged({ key: 8, value: 'false' });
        }
    } else {
      const result = dairyRemindMe.filter(word => word.selected === 'true');
      //When Daily becomes unchecked, everything unchecks
        if (result.length === 8) {
        await this.props.dairyRemindMeChanged({ key: (data.key), value: 'false' });
        await this.props.dairyRemindMeChanged({ key: 0, value: 'false' });
      } else {
        await this.props.dairyRemindMeChanged({ key: (data.key), value: 'false' });
      }
    }
    this.remindMeSelectedDays();
  }
  remindMeSelectedDays = () => {
    this.props.dairyChanged({ prop: 'dairyRemindMeSelected', value: [] });
    const { dairyRemindMe } = this.props;
    const result = dairyRemindMe.filter(word => word.selected === 'true');
    if (result.length === 8) {
      this.props.dairyRemindMeSelectedAdd('Daily');
      return;
    }
    dairyRemindMe.map((obj) => {
      if (obj.selected === 'true') {
        if (obj.key === 1) {
          this.props.dairyRemindMeSelectedAdd('M');
        }
        if (obj.key === 2) {
          this.props.dairyRemindMeSelectedAdd(' Tu');
        }
        if (obj.key === 3) {
          this.props.dairyRemindMeSelectedAdd(' W');
        }
        if (obj.key === 4) {
          this.props.dairyRemindMeSelectedAdd(' Th');
        }
        if (obj.key === 5) {
          this.props.dairyRemindMeSelectedAdd(' F');
        }
        if (obj.key === 6) {
          this.props.dairyRemindMeSelectedAdd(' Sa');
        }
        if (obj.key === 7) {
          this.props.dairyRemindMeSelectedAdd(' Su');
        }
        if (obj.key === 8) {
          this.props.dairyRemindMeSelectedAdd('None');
        }
      }
      return null;
    });
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
            <Text style={[styles.textStyle, this.selectColor()]}>{data.title}</Text>
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
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',

  },
  chevronStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',

  },
  subTextStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'circular',
  //  paddingTop: '3%',
  //  paddingBottom: '10%',
    color: '#6D707D',
  },
});
const mapStateToProps = (state) => {
  return {
    dairyRemindMe: state.nutritionGoalsDairy.dairyRemindMe,
    dairyRemindMeSelected: state.nutritionGoalsDairy.dairyRemindMeSelected
  };
};

export default connect(mapStateToProps,
  { dairyRemindMeChanged,
    dairyRemindMeSelectedAdd,
    dairyRemindMeSelectedDelete,
    dairyChanged
  })(RemindMeListItemDairy);
