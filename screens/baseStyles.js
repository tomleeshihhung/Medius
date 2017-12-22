import { Constants } from 'expo';
import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  //  paddingLeft: 30,
  //  paddingRight: 30,
    backgroundColor: 'white'
  },
  contentContainer: {
    flex: 1,
  //  paddingLeft: 10,
  //  paddingRight: 10,
  //  backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.4),
  },
  iconContainerViewStyle: {
    width: 40,
    marginLeft: 0,
    paddingLeft: 0,
  //  justifyContent: 'flex-start'
  },
});
