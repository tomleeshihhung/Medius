import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

class OnboardSwiper extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.slide1}>
        <Icon
          name='food-apple'
          type='material-community'
          color='#FFFFFF'
          size={100}
        />
          <Text style={styles.text}>Medius</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Be rewarded</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>For your good habits</Text>
        </View>
      </Swiper>
    );
  }
}

export default OnboardSwiper;
