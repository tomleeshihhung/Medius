import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PROGRESS_WIDTH = (SCREEN_WIDTH) - 72;

const Progress = ({ value, text }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.progressTextStyle}>{text}</Text>
    <ProgressBar
    progress={value} width={PROGRESS_WIDTH} height={7} unfilledColor='white' borderWidth={0}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  progressTextStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
    paddingBottom: 20,
    fontFamily: 'circular',
  },

});
export default Progress;
