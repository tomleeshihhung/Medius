import { Constants } from 'expo';
import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  //  paddingLeft: 30,
  //  paddingRight: 30,
//    backgroundColor: 'purple'
  },
  contentContainer: {
    flex: 1,
  //  paddingLeft: 25,
  //  paddingRight: 25,
    backgroundColor: 'white',
  },

  textStyle: {
    color: '#6D707D',
    fontSize: responsiveFontSize(2.4),
  },
  iconContainerViewStyle: {
    width: 40,
    marginLeft: 0,
    paddingLeft: 0,
  //  justifyContent: 'flex-start'
  },

});
