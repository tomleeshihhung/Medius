import { AppLoading } from 'expo';
import _ from 'lodash';
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, AsyncStorage, Dimensions, StyleSheet } from 'react-native';
import OnboardSwiper from './OnboardSwiper';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const BUTTON_WIDTH = SCREEN_WIDTH * 0.85;
const BUTTON_HEIGHT = SCREEN_HEIGHT * 0.07;

class Welcome extends Component {
  state = { token: null }
  async componentWillMount() {
    //AsyncStorage.removeItem('fb_token');
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('Daily');
    } else {
    this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    const { container, logInSection, buttonStyle } = styles;

    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }


    return (

      <View style={container}>
        <View style={{ height: '85%' }}>
        <OnboardSwiper />
        </View>
        <View style={logInSection}>
        <Button
          icon={{ type: 'entypo', name: 'facebook' }}
          buttonStyle={buttonStyle}
          textStyle={{ textAlign: 'center' }}
          title={'Log in with Facebook'}
          onPress={() => this.props.navigation.navigate('Daily')}
        />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  logInSection: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: '#3b5998',
    borderRadius: 5,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
  },

});

export default Welcome;
