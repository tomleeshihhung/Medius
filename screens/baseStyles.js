import { Constants } from 'expo';
import { StyleSheet, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
  //  paddingTop: Platform.OS === 'android' ? 20 : Constants.statusBarHeight,
  //  paddingLeft: 30,
  //  paddingRight: 30,
    backgroundColor: '#FAFBFC',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 0,
    borderRadius: 10,
    margin: 15,
  //  paddingLeft: 10,
  //  paddingRight: 10,
    backgroundColor: 'white',
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
