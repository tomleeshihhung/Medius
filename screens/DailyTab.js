import { Constants } from 'expo';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import DailyListItem from './DailyListItem';

const image = require('./profile.jpg');

class DailyTab extends Component {
  flatListItemSeparator = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#F0F0F0',
          marginLeft: 0,
          marginRight: 0
        }}
      />
    );
  }
  render() {
    console.log(this.props.dailyGoal);
    const renderItem = (list) => {
       return (
       <DailyListItem
       data={list.item}
      // onPress={() => this.onPress(list.item.title)}
       />
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
            <Text style={styles.textStyle}>Tom Lee</Text>
            <Text style={styles.subTextStyle}>5000 points </Text>
            </View>
            <View style={styles.profileButtons}>
            <Icon
              name='bell'
              type='feather'
              color={'#3C3E47'}
              size={25}
              component={TouchableOpacity}
              containerStyle={{ paddingRight: 20 }}
            //  onPress={this.show}
            />
            <Icon
              name='settings'
              type='feather'
              color={'#3C3E47'}
              size={25}
              component={TouchableOpacity}
            //  containerStyle={{ paddingRight: 20 }}
            //  onPress={this.show}
            />
            </View>
        </View>
        <View style={styles.dailyContent}>
        <FlatList
            data={this.props.dailyGoal}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            ItemSeparatorComponent={this.flatListItemSeparator}
            scrollEnabled={false}
        />
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
    backgroundColor: '#EFEFF4'
  },
  dailyHeaderSection: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
  //  justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
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
    paddingLeft: 10,
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
    flex: 7,
  //  flexDirection: 'row',
  //  justifyContent: 'flex-end',
  //  alignItems: 'center',
  //  paddingRight: 25,
  //  paddingLeft: 25,
  //  backgroundColor: 'red'
  //  paddingRight: 20

  },
  textStyle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    fontFamily: 'circular',
  //  paddingTop: '10%',
  //  paddingBottom: '10%',
    color: '#3C3E47',
  },
  subTextStyle:
  {
  fontSize: responsiveFontSize(2),
  paddingTop: 5,
  color: '#3C3E47',
  fontFamily: 'circular',
  //fontWeight: 'bold'
  },
  imageStyle: {
    width: responsiveHeight(9),
    height: responsiveHeight(9),
    borderRadius: responsiveHeight(4.5),
  },
  healthStyle: {
    fontSize: responsiveFontSize(2.2),
    paddingTop: '10%',
    paddingBottom: '10%',
  //  color: checkColor(),
    paddingRight: responsiveWidth(5)
  }
});

const mapStateToProps = (state) => {
  return {
    dailyGoal: state.goals.dailyGoal
  };
};

export default connect(mapStateToProps, {})(DailyTab);
