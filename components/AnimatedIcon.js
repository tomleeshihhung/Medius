import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const GlowIcon = Animatable.createAnimatableComponent(Icon);

const AnimatedIcon = ({ onPress }) => {
  return (
    <GlowIcon
      animation="zoomOut" iterationCount={5}
      name='check-circle'
      duration={2500}
      iterationCount='infinite'
      color={'#3C3E47'}
      size={21}
      component={TouchableOpacity}
      onPress={onPress}
    />
  );
};

export default AnimatedIcon;
