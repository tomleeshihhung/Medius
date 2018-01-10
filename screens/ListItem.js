import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = ((SCREEN_HEIGHT - 122) * 0.8) / 6;

const checkColor = (color) => {
  switch (color) {
    case 'Excellent':
      return '#009fff';
    case 'Great':
      return '#1DE1B5';
    case 'Good':
      return '#FFD700';
    case 'Poor':
      return '#FF8C00';
    case 'Concerning':
      return '#ff0000';
    case 'Take the quiz':
      return '#3abdee';
    case 'Not Available':
      return '#B0B3C2';
    default:
      return '#B0B3C2';
  }
};
//   <View style={[styles.container, { backgroundColor: checkColor(data.status) }]}>
class ListItem extends Component {
  render() {
    const { data, onPress } = this.props;
    return (

      <View style={styles.container}>
      <View style={styles.subContainer1}>
      <Text style={styles.textStyle}>{data.title}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.subContainer2}>
      <Text style={[styles.healthStyle, { color: checkColor(data.status) }]}>{data.status}</Text>
      <Text style={[styles.chevronStyle, { color: checkColor(data.status) }]}>></Text>
      </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: LIST_HEIGHT - 1,
    flexDirection: 'row',
  //  paddingLeft: 25,
  //  paddingRight: 25,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  subContainer1: {
    flex: 1,
  //  paddingLeft: 20,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  subContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: 'white',
  //  backgroundColor: 'red'
  //  paddingRight: 20

  },
  textStyle: {
    fontSize: responsiveFontSize(2.2),
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    fontFamily: 'circular',
    color: '#3C3E47',
  },
  chevronStyle: {
    fontSize: responsiveFontSize(2.5),
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    fontFamily: 'circular',
    color: '#3C3E47',
  },
  healthStyle: {
    fontSize: responsiveFontSize(2.2),
    justifyContent: 'center',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    fontFamily: 'circular',
  //  color: checkColor(),
    paddingRight: responsiveWidth(5)
  }
});

export default ListItem;
