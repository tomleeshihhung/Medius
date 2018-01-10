import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements';
import { ModalScreen } from '../../../components';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = ((SCREEN_HEIGHT - 166) * 0.9) / 5;

class GoalsNutritionListItem extends Component {
  state = { showModalBenefits: false, showModalFriends: false };

  doneBenefits = () => {
  this.setState({ showModalBenefits: false });
  }
  showBenefits = () => {
  this.setState({ showModalBenefits: true });
  }
  doneFriends = () => {
  this.setState({ showModalFriends: false });
  }
  showFriends = () => {
  this.setState({ showModalFriends: true });
  }

  render() {
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
    const { data, onPress } = this.props;
    return (

      <View style={styles.container}>
      <ModalScreen
        visible={this.state.showModalBenefits}
        done={this.doneBenefits}
        title='Health benefits'
      / >
      <ModalScreen
        visible={this.state.showModalFriends}
        done={this.doneFriends}
        title='Friends'
      / >
        <View style={styles.subContainer1}>
          <View style={styles.stackedContainer1}>
          <Text
          style={[styles.textStyle, { color: checkColor(data.status) }]}
          >{data.title}{'   '}
          </Text>
          </View>
          <View style={styles.stackedContainer2}>
          <TouchableOpacity onPress={this.showBenefits} style={styles.rowContainer2}>
          <Icon
            name='plus'
            type='feather'
            color='#3C3E47'
            size={20}
          //  component={TouchableOpacity}
            containerStyle={styles.iconContainerViewStyle}
            //onPress={onPress}
          />
          <Text style={[styles.subTextStyle]}>
           {' '}{' '}{data.subTitle}
          </Text>
          </ TouchableOpacity>

          <TouchableOpacity onPress={this.showFriends} style={styles.rowContainer2}>
          <Icon
            name='users'
            type='feather'
            color='#3C3E47'
            size={20}
          //  component={TouchableOpacity}
            containerStyle={styles.iconContainerViewStyle}
        //    onPress={onPress}
          />
          <Text style={[styles.subTextStyle]}>
          {' '}{' '}{data.subSubTitle}
          </Text>
          </ TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.subContainer2}>
          <Text style={[styles.chevronStyle]}>></Text>
        </ TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: LIST_HEIGHT,
    flexDirection: 'row',
    backgroundColor: 'white',
  //  paddingLeft: 30,
  //  paddingRight: 30,
  },
  iconContainerViewStyle: {
    paddingTop: 1
  },
  subContainer1: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 25
  },
  subContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 25
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
    justifyContent: 'flex-end',
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

  textStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#19A6FF',

  },
  chevronStyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3C3E47',

  },
  subTextStyle: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'circular',
  //  paddingTop: '3%',
  //  paddingBottom: '10%',
    color: '#3C3E47',
  },

});

export default GoalsNutritionListItem;
