import { Constants } from 'expo';
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


//const hello1 = 'An overview of your health habits';
const HeaderSection = ({ center, left, right, style, fontStyle,
  subHeaderText, subSubHeaderText, subHeaderRight }) => {
  const subHeaderSection = (big, small) => {
    if (big) {
      return (
        <View style={[styles.subHeaderSection, style]}>
          <View style={styles.subSubHeaderSection1}>
             <Text style={[styles.subTextStyle, fontStyle]}>{big}</Text>
             <Text style={[styles.subSubTextStyle, fontStyle, { paddingTop: 5 }]}>{small}</Text>
          </View>
          <View style={styles.subSubHeaderSection2}>
             {subHeaderRight}
          </View>
        </View>
      );
    }
  };
  return (
    <View style={subHeaderText ? styles.withSubHeader : [styles.header, style]}>
      <View style={[styles.headerSection, style]}>
        <View style={styles.leftHeader}>{left}</View>
        <View style={styles.centerHeader}>
         {center}
        </View>
        <View style={styles.rightHeader}>
        {right}
        </View>
      </View>
      {subHeaderSection(subHeaderText, subSubHeaderText)}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 44,
    paddingLeft: 25,
    paddingRight: 25,
  },
  withSubHeader: {
    height: 142,
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerSection:
  {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  //  backgroundColor: 'red'
  },
  subHeaderSection:
  {
    height: 77,
    flexDirection: 'row',
  //  justifyContent: 'center',
  //  alignItems: 'flex-start',
    width: '100%',
  //  paddingLeft: 10,
  //   backgroundColor: 'blue'
  },
  subSubHeaderSection1:
  {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 8,
  },
  subSubHeaderSection2:
  {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 2,
    marginRight: -2,
  //  backgroundColor: 'red'
  },
  leftHeader:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerHeader:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightHeader:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textStyle:
  {
  fontSize: responsiveFontSize(2.2),
  paddingTop: 0,
  color: '#3C3E47'
  },
  subTextStyle:
  {
  fontSize: responsiveFontSize(4),
  paddingTop: 0,
  color: '#3C3E47',
  fontFamily: 'circular-bold',
  },
  subSubTextStyle:
  {
  fontSize: responsiveFontSize(2),
  paddingTop: 0,
  color: '#6D707D',
  fontFamily: 'circular',
  //fontWeight: 'bold'
  },
});

export default HeaderSection;
