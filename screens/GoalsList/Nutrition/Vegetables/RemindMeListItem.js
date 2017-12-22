import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import {
  vegetablesRemindMeChanged, vegetablesRemindMeSelectedAdd,
  vegetablesRemindMeSelectedDelete, vegetablesChanged
} from './goalsActions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = (SCREEN_HEIGHT - 213) / 10;
class RemindMeListItem extends Component {
  state = { selectedList: [] }

  onPress = async () => {
    //this.addDeleteSelectedDays();
    const { vegetablesRemindMe, data } = this.props;
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (data.key === 0) {
      // When Daily is checked, all the days are checked
      if (vegetablesRemindMe[data.key].selected === 'false') {
        await array.map((obj, i) => {
          return this.props.vegetablesRemindMeChanged({ key: i, value: 'true' });
        });
        await this.props.vegetablesRemindMeChanged({ key: 8, value: 'false' });
      } else {
        await array.map((obj, i) => {
          return this.props.vegetablesRemindMeChanged({ key: i, value: 'false' });
        });
      }
    } else if
      (vegetablesRemindMe[data.key].selected === 'false') {
        // When the last unchecked day is checked, Daily becomes checked too
        const result = vegetablesRemindMe.filter(word => word.selected !== 'true');
        if (result[0].key === 0 && result[1].key === data.key && result.length === 3) {
          await array.map((obj, i) => {
          return this.props.vegetablesRemindMeChanged({ key: i, value: 'true' });
          });
          await this.props.vegetablesRemindMeChanged({ key: 8, value: 'false' });
        } else if (data.key === 8) {
          await array.map((obj, i) => {
          return this.props.vegetablesRemindMeChanged({ key: i, value: 'false' });
          });
          await this.props.vegetablesRemindMeChanged({ key: (data.key), value: 'true' });
        } else {
        await this.props.vegetablesRemindMeChanged({ key: (data.key), value: 'true' });
        await this.props.vegetablesRemindMeChanged({ key: 8, value: 'false' });
        }
    } else {
      const result = vegetablesRemindMe.filter(word => word.selected === 'true');
      //When Daily becomes unchecked, everything unchecks
        if (result.length === 8) {
        await this.props.vegetablesRemindMeChanged({ key: (data.key), value: 'false' });
        await this.props.vegetablesRemindMeChanged({ key: 0, value: 'false' });
      } else {
        await this.props.vegetablesRemindMeChanged({ key: (data.key), value: 'false' });
      }
    }
    this.remindMeSelectedDays();
  }
  remindMeSelectedDays = () => {
    this.props.vegetablesChanged({ prop: 'vegetablesRemindMeSelected', value: [] });
    const { vegetablesRemindMe } = this.props;
    const result = vegetablesRemindMe.filter(word => word.selected === 'true');
    if (result.length === 8) {
      this.props.vegetablesRemindMeSelectedAdd('Daily');
      return;
    }
    vegetablesRemindMe.map((obj) => {
      if (obj.selected === 'true') {
        if (obj.key === 1) {
          this.props.vegetablesRemindMeSelectedAdd('M');
        }
        if (obj.key === 2) {
          this.props.vegetablesRemindMeSelectedAdd(' Tu');
        }
        if (obj.key === 3) {
          this.props.vegetablesRemindMeSelectedAdd(' W');
        }
        if (obj.key === 4) {
          this.props.vegetablesRemindMeSelectedAdd(' Th');
        }
        if (obj.key === 5) {
          this.props.vegetablesRemindMeSelectedAdd(' F');
        }
        if (obj.key === 6) {
          this.props.vegetablesRemindMeSelectedAdd(' Sa');
        }
        if (obj.key === 7) {
          this.props.vegetablesRemindMeSelectedAdd(' Su');
        }
        if (obj.key === 8) {
          this.props.vegetablesRemindMeSelectedAdd('None');
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
    fontWeight: '500',
  },
  chevronStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#6D707D',
    fontWeight: '500',
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
    vegetablesRemindMe: state.nutritionGoalsVegetables.vegetablesRemindMe,
    vegetablesRemindMeSelected: state.nutritionGoalsVegetables.vegetablesRemindMeSelected
  };
};

export default connect(mapStateToProps,
  { vegetablesRemindMeChanged,
    vegetablesRemindMeSelectedAdd,
    vegetablesRemindMeSelectedDelete,
    vegetablesChanged
  })(RemindMeListItem);
