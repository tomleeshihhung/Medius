import React from 'react';
import { Dimensions } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PROGRESS_WIDTH = (SCREEN_WIDTH) - 48;

const ProgressDaily = ({ value }) => {
  return (
    <ProgressBar
    progress={value} width={PROGRESS_WIDTH} height={7} unfilledColor='#EFEFF4' borderWidth={0}
    />
  );
};

export default ProgressDaily;
