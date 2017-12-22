import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = (SCREEN_HEIGHT - 213) / 5;

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
      return '#B0B3C2';
    case 'Not Available':
      return '#B0B3C2';
    default:
      return '#ff0000';
  }
};
//   <View style={[styles.container, { backgroundColor: checkColor(data.status) }]}>
/*
<View style={styles.subContainer2}>
  <Text
  style={[styles.healthStyle, { color: checkColor(data.status) }]}
  >{data.status}
  </Text>
  <Text style={[styles.textStyle, { color: checkColor(data.status) }]}>></Text>
</View>
*/
class NutritionListItem extends Component {
  render() {
    const { data, onPress } = this.props;
    return (
  //    <TouchableOpacity onPress={onPress}>

      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <Text style={[styles.textStyle, { color: checkColor(data.status) }]}>{data.title}</Text>
          <Text style={[styles.subTextStyle]}>
          {data.subTitle}{data.subSubTitle}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.subContainer2}>
          <Text style={[styles.textStyle]}>></Text>
        </TouchableOpacity>

      </View>

    //  </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: LIST_HEIGHT,
    flexDirection: 'row',

  },
  subContainer1: {
  //  height: LIST_HEIGHT,
    paddingLeft: 25,
    justifyContent: 'center',
  },
  subContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 25
  },
  textStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3C3E47',
    fontWeight: '500',
  },
  subTextStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'brown-light',
    paddingTop: '3%',
  //  paddingBottom: '10%',
    color: '#3C3E47',
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

export default NutritionListItem;
