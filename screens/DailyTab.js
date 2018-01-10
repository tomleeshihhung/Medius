import { Constants } from 'expo';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions,
  TouchableOpacity, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import {
  responsiveFontSize, responsiveWidth, responsiveHeight
} from 'react-native-responsive-dimensions';
import DailyListItem from './DailyListItem';
import { DailyModal, CompletedModal } from '../components';
import { dailyGoalDelete, dailyGoalKeyMinus } from './GoalsList/goalsActions';

const image = require('./profile.jpg');

const SCREEN_HEIGHT = Dimensions.get('window').height - 48;

class DailyTab extends Component {
  state = { showModal: false, showCompletedModal: false, itemKey: 0 };
  onPressCompleted = () => {
    console.log('OG onpresscompleted');
    /*
    this.props.dailyGoalDelete(this.props.dailyGoal[this.state.itemKey]);
    if (this.props.dailyGoal.length === 2) {
    this.props.dailyGoalKeyMinus({ key: 0, value: 0 });
    }
    */
    this.setState({ showCompletedModal: true });
  }
  onPressDelete = () => {
    this.props.dailyGoalDelete(this.props.dailyGoal[this.state.itemKey]);
    if (this.props.dailyGoal.length === 2) {
    this.props.dailyGoalKeyMinus({ key: 0, value: 0 });
    }
    this.setState({ showModal: false });
  }
  done = () => {
  this.setState({ showModal: false, showCompletedModal: false });
  }
  show = (itemKey) => {
  this.setState({ showModal: true, itemKey });
  }

  render() {
    const checkList = () => {
      if (this.props.dailyGoal.length === 1) {
        return (
          <View
              style={{
              borderRadius: 10,
              margin: 15,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2, }}
          >
          <DailyListItem
          data={this.props.dailyGoal[0]}
          key={0}
          onPressMore={this.show}
          onPressCompleted={this.onPressCompleted}
          onPressDelete={this.onPressDelete}
          />
        </View>
        );
      }
      if (this.props.dailyGoal.length === 2) {
        return (
          <View style={{ flex: 1 }}>
          <View
              style={{
              borderRadius: 10,
              margin: 15,
              marginBottom: 7.5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2, }}
          >
          <DailyListItem
          data={this.props.dailyGoal[0]}
          key={0}
          onPressMore={this.show}
          onPressCompleted={this.onPressCompleted}
          onPressDelete={this.onPressDelete}
          />
        </View>
        <View
            style={{
            borderRadius: 10,
            marginTop: 7.5,
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 2, }}
        >
        <DailyListItem
        data={this.props.dailyGoal[1]}
        key={1}
        onPressMore={this.show}
        onPressCompleted={this.onPressCompleted}
        onPressDelete={this.onPressDelete}
        />
      </View>
      </View>
        );
      }
      return (
        <View
        style={{
          flex: 1,
          marginTop: 5,
          marginBottom: 5,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 40,
          paddingRight: 40,
        }}
        >
        <Text style={[styles.boldTextStyle, { paddingBottom: 20 }]}>No current goals</Text>
        <Icon
          name='star'
          type='feather'
          color={'#19A6FF'}
          size={180}
        />
        <Text
        style={[styles.textStyle, { paddingTop: 40, paddingBottom: 20, textAlign: 'center' }]}
        >{'Start earning rewards for your healthy habits with a new goal'}</Text>
        <Button
          textStyle={styles.buttonTextStyle}
          title='Create new goal'
          buttonStyle={styles.buttonStyle}
          containerViewStyle={styles.buttonContainerViewStyle}
          onPress={() => this.props.navigation.navigate('Goals')}
        />
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <View style={styles.dailyHeaderSection}>
            <View style={styles.profilePic}>
            <Image
            source={image}
            style={styles.imageStyle}
            />
            </View>
            <View style={styles.profileText}>
            <Text style={[styles.textStyle, { fontFamily: 'circular-bold' }]}>Tom Lee</Text>
            <Text style={styles.subTextStyle}>{this.props.points} points</Text>
            </View>
            <View style={styles.profileButtons}>
            <Icon
              name='bell'
              type='feather'
              color={'white'}
              size={responsiveWidth(6.5)}
              component={TouchableOpacity}
              containerStyle={{ paddingRight: responsiveWidth(6) }}
            //  onPress={this.show}
            />
            <Icon
              name='settings'
              type='feather'
              color={'white'}
              size={responsiveWidth(6.5)}
              component={TouchableOpacity}
            //  containerStyle={{ paddingRight: 20 }}
            //  onPress={this.show}
            />
            </View>
        </View>
        <View style={styles.dailyContent}>
        <DailyModal
          visible={this.state.showModal}
          done={this.done}
          itemKey={this.state.itemKey}
          onPressDelete={this.onPressDelete}
        />
        <CompletedModal
          visible={this.state.showCompletedModal}
          done={this.done}
          itemKey={this.state.itemKey}
          onPressDelete={this.onPressDelete}
        />
        {checkList()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  paddingLeft: 30,
  //  paddingRight: 30,
    backgroundColor: '#FAFBFC'
  },
  dailyHeaderSection: {
    height: SCREEN_HEIGHT * 0.15,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
  //  justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#3abdee',

  },
  profilePic: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  //  backgroundColor: 'pink'
  },
  profileText: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5,
  //  backgroundColor: 'yellow',
  },
  profileButtons: {
    flex: 4,
  //  backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  dailyContent: {
    height: SCREEN_HEIGHT * 0.85,
  //  flexDirection: 'row',
    justifyContent: 'flex-start',
  //  backgroundColor: '#FAFBFC',
  //  alignItems: 'center',
  //  paddingRight: 25,
  //  paddingLeft: 25,
  //  backgroundColor: 'red'
  //  paddingRight: 20
  },
  textStyle: {
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'circular',
    color: 'white',
  },
  boldTextStyle:
  {
  fontSize: responsiveFontSize(4),
  paddingTop: 0,
  color: '#3C3E47',
  fontFamily: 'circular-bold',
  },
  subTextStyle:
  {
  fontSize: responsiveFontSize(2),
  paddingTop: 2.5,
  color: 'white',
  fontFamily: 'circular',
  //fontWeight: 'bold'
  },
  imageStyle: {
    width: responsiveHeight(8),
    height: responsiveHeight(8),
    borderRadius: responsiveHeight(4),
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  healthStyle: {
    fontSize: responsiveFontSize(2.2),
    paddingTop: '10%',
    paddingBottom: '10%',
  //  color: checkColor(),
    paddingRight: responsiveWidth(5)
  },
  buttonContainerViewStyle: {
    width: '100%',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#19A6FF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonTextStyle: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'circular',
    color: 'white',
  },
});

const mapStateToProps = (state) => {
  return {
    dailyGoal: state.goals.dailyGoal,
    points: state.user.points,
  };
};

export default connect(mapStateToProps, { dailyGoalDelete, dailyGoalKeyMinus })(DailyTab);
