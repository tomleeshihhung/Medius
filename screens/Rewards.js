import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveWidth } from 'react-native-responsive-dimensions';

class Rewards extends Component {
  static navigationOptions = {
    title: 'Rewards',
    tabBarIcon: ({ tintColor }) => {
      return (
    <Icon
      name='settings'
      type='feather'
      color={tintColor}
      size={23}
      //component={TouchableOpacity}
    />);
    }
  }
  render() {

    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text>Rewards</Text>
      </View>
    );
  }
}

export default Rewards;
