import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, FlatList, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { NavigationActions } from 'react-navigation';
import GoalsNutritionListItem from './GoalsList/Nutrition/GoalsNutritionListItem';

import { goalsChanged } from './GoalsList/goalsActions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
/*
<HeaderSection
subHeaderText='Goals'
subSubHeaderText='Your personalised habit goals'
/>
<HeaderSection
left={<BackButton color='#3C3E47' containerStyle={styles.leftIcon} />}
right={<ForwardButton color='#3C3E47' containerStyle={styles.rightIcon} />}
center={<Text style={styles.textStyle}>Nutrition</Text>}
centerTextStyle={{ color: '#6D707D' }}
style={{ backgroundColor: '#FAFBFC' }}
/>
*/

class GoalsTab extends Component {

  static navigationOptions = {
    title: 'Goals',
    header: null,
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: '#3abdee',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: '#fff',
      fontFamily: 'circular-bold',
      fontSize: responsiveFontSize(2.4),
    }
  };

  state = { appLoaded: false, scrollPosition: this.props.scrollNutrition, }
  componentDidMount() {
    this.loadApp();
    this.props.goalsChanged({ prop: 'parentNavigation', value: this.props.navigation });
    this.scrollView.scrollTo({ x: this.props.scrollNutrition, y: 0, animated: false });
  }
  componentWillReceiveProps(nextProps) {
  
  }
  onPress = (item) => {
    this.props.goalsChanged({ prop: 'title', value: item.title });
    this.props.goalsChanged({ prop: 'status', value: item.status });
    this.props.goalsChanged({ prop: 'newStatus', value: '' });
    this.props.parentNavigation.navigate('NewGoal');
  }
  navigateSugar = () => {
    // this.navigate('GoalsSugar')
    const { navigate } = this.props.navigation;
    navigate('GoalsSugar', { item: 'Data' });
  }

  navigate = (item) => {
  //  this.props.goalsChanged({ prop: 'scrollSugar', value: event.nativeEvent.contentOffset.x });
    this.props.navigation.navigate(item, { user: 'Tom' });
  }

  handleScroll = (event) => {
  this.props.goalsChanged({ prop: 'scrollSugar', value: event.nativeEvent.contentOffset.x });
  console.log(this.props.scrollSugar, 'nutrition sugar scroll');
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
  navigateAction = NavigationActions.navigate({
    routeName: 'GoalsTab',
    params: {},
    action: NavigationActions.navigate({ routeName: 'GoalsSugar' })
  })
  loadApp() {
       this.setState({ fontLoaded: true });
  }

  render() {
    console.log(this.props.scrollNutrition, 'scrollNutrition');
    const { vegetables, fruits, proteins, dairy, water, dairyQ } = this.props;
    const data = [
      { title: 'Vegetables',
        subTitle: '3 benefits',
        subSubTitle: '1 friend',
        status: vegetables,
       },
      { title: 'Fruits',
        subTitle: '2 benefits',
        subSubTitle: '2 friends',
        status: fruits,
      },
      { title: 'Dairy',
        subTitle: '4 benefits',
        subSubTitle: 'Be the first',
        status: dairy,
      },
      { title: 'Protein',
        subTitle: '3 benefits',
        subSubTitle: '3 friends',
        status: proteins,
      },
      { title: 'Water',
        subTitle: '2 benefits',
        subSubTitle: 'Be the first',
        status: water,
      }
    ];

    const noDairyData = [
      { title: 'Vegetables',
        subTitle: '3 benefits',
        subSubTitle: '1 friend',
        status: vegetables,
       },
      { title: 'Fruits',
        subTitle: '2 benefits',
        subSubTitle: '2 friends',
        status: fruits,
      },
      { title: 'Protein',
        subTitle: '3 benefits',
        subSubTitle: '3 friends',
        status: proteins,
      },
      { title: 'Water',
        subTitle: '2 benefits',
        subSubTitle: 'Be the first',
        status: water,
      }
    ];
    const checkData = () => {
      if (dairyQ === 'none') {
        return data;
      }
      return noDairyData;
    };
    const renderItem = (list) => {
       return <GoalsNutritionListItem data={list.item} onPress={() => this.onPress(list.item)} />;
    };

    return (

      <View style={styles.container}>
      <View
      style={{ height: 20, width: '100%', backgroundColor: '#3abdee' }}
      />
      <View
      style={{
        height: 44,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3abdee' }}
      >
      <Text
      style={{ color: '#fff',
      fontFamily: 'circular-bold',
      fontSize: responsiveFontSize(2.4), }}
      >Goals</Text>
      </View>
      <View
      style={{ height: 44, width: '100%' }}
      >
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={this.handleScroll}
      scrollEventThrottle={20}
      style={styles.goalBar}
      contentContainerStyle={{ width: '230%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center', }}
      ref={ref => { this.scrollView = ref; }}
      >
      <Button
        textStyle={styles.buttonTextStyle}
        title={'Nutrition'}
        buttonStyle={styles.buttonStyle}
        containerViewStyle={[styles.pressedButtonContainer]}
      />
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Sugar'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
        onPress={() => this.navigateSugar()}
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
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
        <FlatList
            data={checkData()}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={this.flatListItemSeparator}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            style={{ borderRadius: 10 }}
        />
        </View>
      </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    nutritionFinal: state.nutrition.nutritionFinal,
    parentNavigation: state.goals.parentNavigation,
    water: state.nutrition.water.status,
    proteins: state.nutrition.proteins.status,
    vegetables: state.nutrition.vegetables.status,
    fruits: state.nutrition.fruits.status,
    dairy: state.nutrition.dairy.status,
    dairyQ: state.nutrition.dairyQ,
    scrollSugar: state.goals.scrollSugar
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  //  paddingTop: Platform.OS === 'android' ? 20 : Constants.statusBarHeight,
  //  paddingLeft: 30,
  //  paddingRight: 30,
    backgroundColor: '#FAFBFC'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
//    backgroundColor: 'red'
  },
  contentContainer: {
    height: (SCREEN_HEIGHT - 164) * 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 0,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  //  marginTop: 0,
  //  paddingLeft: 10,
  //  paddingRight: 10,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  leftIcon: {
    width: 40,
    marginLeft: -12,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },
  rightIcon: {
    width: 40,
    marginRight: -12,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },
  textStyle:
  {
  fontSize: responsiveFontSize(2.2),
  paddingTop: 0,
  fontFamily: 'circular',
  color: '#3C3E47'
  },
});

export default connect(mapStateToProps, { goalsChanged })(GoalsTab);
