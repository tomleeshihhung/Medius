import React from 'react';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { Constants } from 'expo';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements';
import {
  View, StyleSheet, TouchableOpacity,
  Text, Dimensions, ScrollView
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height - 172;
const SCREEN_WIDTH = Dimensions.get('window').width - 40;

const CompletedModal = ({ visible, done, itemKey, onPressDelete }) => {
  const { innerContainerStyle, } = styles;
  const end = () => {
    done();
    onPressDelete();
  };
  return (

    <Modal
      isVisible={visible}
      animationIn='slideInUp'
      backdropOpacity={0.5}
      style={{ margin: 0 }}
    >

    <View style={innerContainerStyle}>

      <View style={styles.headerSection}>

        <Icon
            name='ios-arrow-down'
            type='ionicon'
            color={'#3C3E47'}
            size={30}
            component={TouchableOpacity}
            containerStyle={styles.iconContainerViewStyle}
            onPress={done}
        />
        </View>

    <ScrollView style={{ flex: 1 }}>
    <View style={styles.subSubHeaderSection1}>
       <Text style={styles.subTextStyle}>Goal completed!</Text>
    </View>
    <View style={styles.firstContainer}>
      <View style={styles.listItemRowTitle}>
      <View style={{ width: '50%', alignItems: 'flex-start' }}>
      <Text style={[styles.boldTextStyle]}>Vegetables</Text>
      </View>
      <View style={{ width: '50%', alignItems: 'flex-end' }}>
      <Text style={[styles.textStyle]}>3 servings daily</Text>
      </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#EFEFF4', width: '100%' }} />
      <View style={styles.listItemRowTitle}>
      <View style={{ width: '85%', alignItems: 'flex-start' }}>
      <Text style={[styles.boldTextStyle]}>Days goal reached</Text>
      </View>
      <View style={{ width: '15%', alignItems: 'flex-end' }}>
      <Text style={[styles.textStyle]}>3</Text>
      </View>
      </View>
    </View>
    <Text style={styles.smallTextStyle}>Points earned</Text>

    <View style={styles.secondContainer}>

      <View style={styles.pointsRowInner}>
      <View style={styles.listItemRowInner1}>
      <Text style={styles.textStyle}>Daily points</Text>
      </View>
      <View style={styles.listItemRowInner2}>
      <Text style={styles.textStyle}>700</Text>
      </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#EFEFF4', width: '100%' }} />
      <View style={styles.pointsRowInner}>
      <View style={styles.listItemRowInner1}>
      <Text style={styles.textStyle}>Weekly bonus</Text>
      </View>
      <View style={styles.listItemRowInner2}>
      <Text style={styles.textStyle}>400</Text>
      </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#EFEFF4', width: '100%' }} />
      <View style={styles.pointsRowInner}>
      <View style={styles.listItemRowInner1}>
      <Text style={styles.textStyle}>Total points</Text>
      </View>
      <View style={styles.listItemRowInner2}>
      <Text style={styles.textStyle}>1100</Text>
      </View>
      </View>

    </View>
    <Text style={styles.smallTextStyle}>Health benefits</Text>
    <View style={styles.thirdContainer}>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        height: '100%',
        width: '100%' }}
      contentContainerStyle={{
      justifyContent: 'flex-start', alignItems: 'center' }}
      >
      <View style={{ width: SCREEN_WIDTH * 0.25, justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
      <Icon
        name='box'
        type='feather'
        color={'#009fff'}
        size={40}
        component={TouchableOpacity}
        onPress={done}
      />
      <Text style={[styles.healthTextStyle, { paddingTop: 10 }]}> Heart </Text>
      </View>

      <View style={{ width: SCREEN_WIDTH * 0.25, justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
      <Icon
        name='box'
        type='feather'
        color={'#009fff'}
        size={40}
        component={TouchableOpacity}
        onPress={done}
      />
      <Text style={[styles.healthTextStyle, { paddingTop: 10 }]}> Bowel </Text>
      </View>

      <View style={{ width: SCREEN_WIDTH * 0.25, justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
      <Icon
        name='box'
        type='feather'
        color={'#009fff'}
        size={40}
        component={TouchableOpacity}
        onPress={done}
      />
      <Text style={[styles.healthTextStyle]}> Weight </Text>
      </View>

      <View style={{ width: SCREEN_WIDTH * 0.25, justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
      <Icon
        name='box'
        type='feather'
        color={'#009fff'}
        size={40}
        component={TouchableOpacity}
        onPress={done}
      />
      <Text style={[styles.healthTextStyle, { paddingTop: 10 }]}> Skin </Text>
      </View>

      <View style={{ width: SCREEN_WIDTH * 0.25, justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
      <Icon
        name='box'
        type='feather'
        color={'#009fff'}
        size={40}
      //  component={TouchableOpacity}
        onPress={done}
      />
      <Text style={[styles.healthTextStyle, { paddingTop: 10 }]}> Mood </Text>
      </View>

      </ScrollView>
    </View>

    <View
    style={[styles.buttonContainer,
      { marginTop: 10, backgroundColor: 'white', borderColor: 'white' }]}
    >
    <Icon
      name='repeat'
      type='feather'
      color={'#009fff'}
      size={21}
    //  component={TouchableOpacity}
      onPress={done}
    />
    <Text style={[styles.buttonTextStyle, { paddingLeft: 5, color: '#3C3E47' }]}> Repeat</Text>
    </View>

    <View style={[styles.buttonContainer, { backgroundColor: 'white', borderColor: '#1DE1B5' }]}>
    <Icon
      name='upload'
      type='feather'
      color={'#1DE1B5'}
      size={21}
    //  component={TouchableOpacity}
    //  onPress={done}
    />
    <Text style={[styles.buttonTextStyle, { paddingLeft: 5, color: '#3C3E47' }]}> Share</Text>
    </View>

    <TouchableOpacity
    style={[styles.buttonContainer, { backgroundColor: 'white', borderColor: '#FF6050' }]}
    onPress={end}
    >
    <Icon
      name='x-square'
      type='feather'
      color={'#FF6050'}
      size={21}
    //  component={TouchableOpacity}
    //  onPress={done}
    />
    <Text style={[styles.buttonTextStyle, { paddingLeft: 5, color: '#3C3E47' }]}> End</Text>
    </TouchableOpacity>
    <View style={{ height: 20 }} />
    </ ScrollView>

    </View>

  </Modal>

);
};

const styles = StyleSheet.create({
  header: {

    height: 44,
    width: '100%',
    paddingLeft: 20,
  //  paddingRight: 25,
  //  backgroundColor: '#B0B3C2'
  },
  headerSection:
  {

    height: 44,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 20,
    marginTop: Constants.statusBarHeight,
  //  backgroundColor: 'red'
  },
  withSubHeader: {
    paddingTop: Constants.statusBarHeight,
    height: 132,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 0,
  },
  subHeaderSection:
  {
    height: 88,
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
    flex: 1,
    paddingLeft: 20,
  },
  subTextStyle:
  {
  fontSize: responsiveFontSize(4),
  paddingTop: 0,
  color: '#3abdee',
  fontFamily: 'circular-bold',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10
//    marginLeft: 20,
  //  marginLeft: 20,
  },
  innerContainerStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFBFC',
    borderRadius: 10

  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#F0F0F0',
  },
  firstContainer: {
    height: SCREEN_HEIGHT * 0.2,
    //flexDirection: 'row',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  secondContainer: {
    height: SCREEN_HEIGHT * 0.3,
    //flexDirection: 'row',
    width: SCREEN_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    borderRadius: 10,
    margin: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  //  paddingLeft: 8,
  },
  thirdContainer: {
    height: SCREEN_HEIGHT * 0.25,
    //flexDirection: 'row',
    width: SCREEN_WIDTH,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginTop: 10,
    margin: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  //  paddingLeft: 8,
  },
  buttonContainer: {
    height: SCREEN_HEIGHT * 0.1,
    //flexDirection: 'row',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3abdee',
    marginTop: 10,
    marginBottom: 5,
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  //  paddingLeft: 8,
  },
  listItemRowTitle: {
    height: SCREEN_HEIGHT * 0.1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  //  backgroundColor: 'grey',
  //  paddingLeft: 8,
  },
  benefitsRowInner: {
    height: '13%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  //  backgroundColor: 'blue',
  },
  pointsRowInner: {
    height: SCREEN_HEIGHT * 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  //  backgroundColor: 'blue',
  },
  listItemRowInner1: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  //  paddingLeft: 8,
  },
  listItemRowInner2: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  //  paddingLeft: 8,
  },
  itemInnerContainer1: {
    width: '30.3%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  itemInnerContainer2: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  //  backgroundColor: 'pink',
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'circular',
    color: '#3C3E47',
  },
  boldTextStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'circular',
  //  paddingTop: '10%',
    color: '#3C3E47',
  },
  smallTextStyle: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'circular-bold',
    color: '#6D707D',
  },
  healthTextStyle: {
    paddingTop: 10,
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'circular-bold',
    color: '#3C3E47',
  },
  buttonTextStyle: {
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'circular',
  },

});
const mapStateToProps = (state) => {
  return {
    dailyGoal: state.goals.dailyGoal,
  };
};

export default connect(mapStateToProps, {})(CompletedModal);
