import React from 'react';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';


const DailyModal = ({ visible, done, itemKey, onPressDelete }) => {
  const { containerStyle, innerContainerStyle, } = styles;
  console.log(itemKey);
  return (

  <Modal
    isVisible={visible}
    animationIn='slideInUp'
    backdropOpacity={0.5}
    style={{ margin: 0 }}
  >
  <TouchableWithoutFeedback onPress={done}>
  <View style={containerStyle}>
  <View style={innerContainerStyle}>

  <TouchableOpacity style={styles.listItemContainer}>
  <View style={styles.itemInnerContainer1}>
  <Icon
    name='info'
    type='feather'
    color={'#3C3E47'}
    size={25}
    component={TouchableOpacity}
  //  onPress={onPressMore}
  />
  </View>
  <View style={styles.itemInnerContainer2}>
  <Text style={styles.textStyle}> Goal info </Text>
  <Text style={styles.smallTextStyle}> Learn more about this goal </Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.listItemContainer}
  //onPress={this.props.dailyGoalDelete(this.props.dailyGoal[itemKey])}
  >
  <View style={styles.itemInnerContainer1}>
  <Icon
    name='sliders'
    type='feather'
    color={'#3C3E47'}
    size={25}
    component={TouchableOpacity}
  //  onPress={onPressMore}
  />
  </View>
  <View style={styles.itemInnerContainer2}>
  <Text style={styles.textStyle}> Edit reminders </Text>
  <Text style={styles.smallTextStyle}> Change the timing of reminders </Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.listItemContainer}
  onPress={onPressDelete}
  >
  <View style={styles.itemInnerContainer1}>
  <Icon
    name='x-square'
    type='feather'
    color={'#3C3E47'}
    size={25}
    component={TouchableOpacity}
  //  onPress={onPressMore}
  />
  </View>
  <View style={styles.itemInnerContainer2}>
  <Text style={styles.textStyle}> End goal </Text>
  <Text style={styles.smallTextStyle}> End and remove goal </Text>
  </View>

  </TouchableOpacity>
  </View>

  </View>
    </ TouchableWithoutFeedback>
  </Modal>

);
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
//    marginLeft: 20,
  //  marginLeft: 20,
  },
  darkContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
//    marginLeft: 20,
  //  marginLeft: 20,
  },
  innerContainerStyle: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  //  paddingLeft: 8,
  },
  itemInnerContainer1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  //  paddingLeft: 8,
  },
  itemInnerContainer2: {
    flex: 6,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  //  paddingLeft: 8,
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'circular',
    color: '#3C3E47',
  },
  smallTextStyle: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'circular',
    color: '#6D707D',
  },
  buttonContainerViewStyle: {
    width: '100%',
    paddingLeft: 15,
    //paddingTop: 20,
    marginTop: 0,
    justifyContent: 'center',
  },
  newButtonStyle: {
    backgroundColor: '#65B4CE',
    borderRadius: 5,
  },
});
const mapStateToProps = (state) => {
  return {
    dailyGoal: state.goals.dailyGoal,
  };
};

export default connect(mapStateToProps, {})(DailyModal);
