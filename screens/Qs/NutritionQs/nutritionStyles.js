import { Constants } from 'expo';
import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#65B4CE',
  //  paddingLeft: 25,
//    paddingRight: 25,
//    backgroundColor: 'purple'
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  //  backgroundColor: 'green',
  },
  titleSection:
  {
    height: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: -5,
    paddingBottom: 20,
  //  backgroundColor: 'yellow',
  },
  textSection:
  {
    height: '20%',
  //  justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingLeft: 6,
//    paddingRight: 15,
  //  backgroundColor: 'orange'
  },
  buttonTextSection:
  {
    height: '10%',
  //  justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
  //  paddingLeft: 15,
  //  paddingRight: 15,
  //  backgroundColor: 'orange'
  },
  smallTextStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.1),
  },
  AmountSection: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'blue'
  },
  buttonAmountSection: {
    height: '65%',
  //  marginLeft: 15,
  //  marginRight: 15,
    justifyContent: 'center',
  //  backgroundColor: 'grey',
  },
  AddMinusSection: {
    height: '15%',
    justifyContent: 'flex-end',
  //  backgroundColor: 'blue'
  },
  lastSection: {
    height: '15%',
    marginLeft: 6,
    marginRight: 6,
  //  backgroundColor: 'grey',
  },
  textStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'circular',
  },
  amountTextStyle: {
    color: 'white',
    fontSize: responsiveFontSize(16),
    fontFamily: 'circular',
  },
  descriptionTextStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'circular',
  },
  iconContainerViewStyle: {
    width: 40,
    marginLeft: -4,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },

});
