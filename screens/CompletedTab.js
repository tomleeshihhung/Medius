import React, { Component } from 'react';
import { Icon, Button } from 'react-native-elements';
import {
  View, FlatList, StyleSheet, TouchableOpacity,
  Text, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { ModalScreen, Ratings } from '../components';
import { nutritionChanged } from './Qs/NutritionQs/nutritionActions';
import ListItem from './ListItem';
/*

  export const facebookLogin = () => async dispatch => {
    const token = await AsyncStorage.getItem('fb_token');
    */

const SCREEN_HEIGHT = Dimensions.get('window').height;

class CompletedTab extends Component {
  static navigationOptions = {
    title: 'Completed',
    headerStyle: {
      backgroundColor: '#3abdee',
      borderWidth: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: '#fff',
      fontFamily: 'circular-bold',
      fontSize: responsiveFontSize(2.4),
    }
  };

  state = { showModal: false };

  onPress = (key, status) => {
    if (status === 'Take the quiz') {
    this.props.navigation.navigate('NutritionQs');
    } else {
      this.props.navigation.navigate(key);
    }
  }
  done = () => {
  this.setState({ showModal: false });
  }
  show = () => {
  this.setState({ showModal: true });
  }

  flatListItemSeparator = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#F0F0F0',
          marginLeft: 0,
          marginRight: 0
        }}
      />
    );
  }
  icon = () => {
    return (
      <View>
      <Icon
        name='info'
        type='feather'
        color={'#3C3E47'}
        size={responsiveWidth(6.5)}
        component={TouchableOpacity}
      //  containerStyle={styles.iconContainerViewStyle}
        onPress={this.show}
      />
      </View>
    );
  }
  render() {
    const data = [
      { title: 'Sugar',
        navigate: 'HealthSugar',
        status: 'Coming soon',
        key: 1
      },
      { title: 'Nutrition',
        navigate: 'CompletedNutrition',
        status: this.props.nutritionFinal.status,
        key: 2
        //`${this.props.nutritionFinal.status}`,
      },
      { title: 'Exercise',
        navigate: 'HealthExercise',
        status: 'Coming soon',
        key: 3
      },
      { title: 'Sleep',
        navigate: 'HealthSleep',
        status: 'Coming soon',
        key: 4
      },
      { title: 'Mood',
        navigate: 'HealthMood',
        status: 'Coming soon',
        key: 5
      },
      { title: 'Alcohol & Smoking',
      navigate: 'HealthAandS',
        status: 'Coming soon',
        key: 6
      },
    ];

    const renderItem = (list) => {
       return (
       <ListItem
       data={list.item}
       onPress={() => this.onPress(list.item.navigate, list.item.status)}
       />
     );
    };
    return (

      <View style={styles.container}>
      <View style={{ height: 44, width: '100%' }}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.goalBar}
      contentContainerStyle={{ width: '230%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center', }}
      >
      <Button
        textStyle={styles.buttonTextStyle}
        title={'All'}
        buttonStyle={styles.buttonStyle}
        containerViewStyle={[styles.pressedButtonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Sugar'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Nutrition'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Exercise'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Mood'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Sleep'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'A & S'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
      />
      </ScrollView>
      </View>
        <View style={{ height: 44, justifyContent: 'center', paddingLeft: 20 }}>
        <Text style={styles.textStyle}> Overview of your health habits </Text>
        </View>
        <View style={styles.contentContainer}>
          <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              ItemSeparatorComponent={this.flatListItemSeparator}
              scrollEnabled={false}
              style={{ borderRadius: 10 }}
          />
          <ModalScreen
            visible={this.state.showModal}
            done={this.done}
            title='Ratings Guide'
          >
          <View style={styles.ratingsContainer}>
          <Ratings />
          </View>
          </ModalScreen>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    nutritionFinal: state.nutrition.nutritionFinal,
    water: state.nutrition.water,
    proteins: state.nutrition.proteins,
    vegetables: state.nutrition.vegetables,
    fruits: state.nutrition.fruits,
    dairy: state.nutrition.dairy,
  };
};

const styles = StyleSheet.create({
  ratingsContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
//    backgroundColor: 'orange'
},
textStyle: {
  fontSize: responsiveFontSize(2),
//  paddingTop: '10%',
//  paddingBottom: '10%',
  fontFamily: 'circular-bold',
  color: '#6D707D',
},
container: {
  flex: 1,
  justifyContent: 'flex-start',
//  paddingTop: Platform.OS === 'android' ? 20 : Constants.statusBarHeight,
//  paddingLeft: 30,
//  paddingRight: 30,
  backgroundColor: '#FAFBFC'
},
contentContainer: {
  height: (SCREEN_HEIGHT - 122) * 0.8,
  borderWidth: 0,
  borderRadius: 10,
  margin: 20,
  marginTop: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
//  paddingLeft: 10,
//  paddingRight: 10,
  backgroundColor: 'white',
},
buttonContainer: {
  height: '70%',
  width: 100,
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 10,
  marginRight: 0,
  marginLeft: 20,
//  justifyContent: 'space-around',
},
  pressedButtonContainer: {
    height: '70%',
    width: 100,
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginRight: 0,
    marginLeft: 20,
  //  justifyContent: 'space-around',
  },
buttonStyle: {
  height: '100%',
  backgroundColor: 'white',
  borderRadius: 10,
  width: '100%'
},
buttonTextStyle: {
  textAlign: 'center',
  color: '#3abdee',
  fontSize: 15,
  fontFamily: 'circular',
},
goalBar: {
  flexDirection: 'row',
  flex: 1,
  backgroundColor: '#3abdee',
  borderWidth: 0,

},

});

export default connect(mapStateToProps, { nutritionChanged })(CompletedTab);
