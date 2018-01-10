import { Constants } from 'expo';
import { StyleSheet, Dimensions } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'red',

  //  paddingLeft: 30,
  //  paddingRight: 30,
//    backgroundColor: 'purple'
  },
  contentContainer: {
    height: (SCREEN_HEIGHT - 122) * 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 0,
    borderRadius: 10,
    margin: 20,
    marginTop: 0,
  //  paddingLeft: 10,
  //  paddingRight: 10,
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
