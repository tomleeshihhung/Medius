import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveWidth } from 'react-native-responsive-dimensions';

class Completed extends Component {
  static navigationOptions = {
    title: 'Completed',
    tabBarIcon: ({ tintColor }) => {
      return (
    <Icon
      name='settings'
      type='feather'
      color={tintColor}
      size={responsiveWidth(6)}
      //component={TouchableOpacity}
    />);
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text>Achievements</Text>
      </View>
    );
  }
}

export default Completed;
