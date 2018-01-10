import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import GoalsSugarListItem from './GoalsSugarListItem';
import { goalsChanged } from '../goalsActions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class GoalsSugar extends Component {
  static navigationOptions = {
    header: null,
  };
  state = { scrollPosition: this.props.scrollSugar }
  constructor(props) {
    super(props);
    debugger;
  }
  componentDidMount() {
    this.scrollView.scrollTo({ x: this.props.scrollSugar, y: 0, animated: false });
  }

  setScroll = () => {
    this.scrollView.scrollTo({ x: this.props.scrollSugar, y: 0, animated: false });
  }

  onPress = (item) => {
    this.props.goalsChanged({ prop: 'title', value: item.title });
    this.props.goalsChanged({ prop: 'status', value: item.status });
    this.props.goalsChanged({ prop: 'newStatus', value: '' });
    this.props.parentNavigation.navigate('NewGoal');
  }
  navigate = async (item) => {
    this.props.navigation.navigate(item, { scrollPosition: this.state.scrollPosition });
  }
  handleScroll = (event) => {
    this.props.goalsChanged({ prop: 'scrollNutrition', value: event.nativeEvent.contentOffset.x });
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
  render() {
    //  this.setScroll();
    const { vegetables, fruits, dairy, dairyQ } = this.props;
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

    ];
    const checkData = () => {
      if (dairyQ === 'none') {
        return data;
      }
      return noDairyData;
    };
    const renderItem = (list) => {
       return <GoalsSugarListItem data={list.item} onPress={() => this.onPress(list.item)} />;
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
      style={styles.goalBar}
      scrollEventThrottle={20}
      onScroll={this.handleScroll}
      contentContainerStyle={{ width: '230%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center', }}
      ref={ref => { ref.scrollTo({ x: this.props.scrollSugar, y: 0, animated: false }); }}
      >
      <Button
        textStyle={[styles.buttonTextStyle, { color: 'white' }]}
        title={'Nutrition'}
        buttonStyle={[styles.buttonStyle, { backgroundColor: '#3abdee' }]}
        containerViewStyle={[styles.buttonContainer]}
        onPress={() => this.navigate('GoalsTab')}
      />
      <Button
        textStyle={styles.buttonTextStyle}
        title={'Sugar'}
        buttonStyle={styles.buttonStyle}
        containerViewStyle={[styles.pressedButtonContainer]}
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

export default connect(mapStateToProps, { goalsChanged })(GoalsSugar);
