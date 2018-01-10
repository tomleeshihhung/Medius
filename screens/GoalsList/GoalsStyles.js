import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  //  paddingLeft: 25,
//    paddingRight: 25,
//    backgroundColor: 'purple'
  },
  textStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'circular'
  },
  iconContainerViewStyle: {
    width: 40,
    marginLeft: 0,
    paddingLeft: 0,
  //  justifyContent: 'flex-start'
  },

});
