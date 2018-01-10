import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Ratings, ModalScreen, BackButton } from '../../components';
import NewGoalsListItemVeg from './Nutrition/Vegetables/NewGoalsListItemVeg';
import NewGoalsListItemFruits from './Nutrition/Fruits/NewGoalsListItemFruits';
import NewGoalsListItemDairy from './Nutrition/Dairy/NewGoalsListItemDairy';
import NewGoalsListItemProtein from './Nutrition/Protein/NewGoalsListItemProtein';
import NewGoalsListItemWater from './Nutrition/Water/NewGoalsListItemWater';
import { vegetablesChanged } from './Nutrition/Vegetables/goalsActionsVeg';
import { fruitsChanged } from './Nutrition/Fruits/goalsActionsFruits';
import { dairyChanged } from './Nutrition/Dairy/goalsActionsDairy';
import { proteinChanged } from './Nutrition/Protein/goalsActionsProtein';
import { waterChanged } from './Nutrition/Water/goalsActionsWater';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = (SCREEN_HEIGHT - 157) / 8;


/*
<HeaderSection
left={<BackButton onPress={() => dispatch(backAction)} color='#3C3E47' />}
subHeaderText={`${this.goalTitleCheck(this.props.title)} goal`}
subHeaderRight={this.icon()}
/>
*/

class NewGoal extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Goal',
    headerLeft:
    <BackButton
    onPress={() => navigation.goBack(null)}
    color='white'
    containerStyle={{ paddingLeft: 20, marginLeft: 0, paddingTop: 5 }}
    />,
    headerStyle: {
      backgroundColor: '#3abdee',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      borderWidth: 0,
      borderBottomWidth: 0,
    },

    headerTitleStyle: {
      color: '#fff',
      fontFamily: 'circular-bold',
      fontSize: responsiveFontSize(2.4),
    }
  });

  state = { showModal: false, selectedDay: [], week: 'Daily' };

  componentDidMount() {
    this.oneUpValue(this.props.title, this.props.status);
  }

  oneUpStatus = (status) => {
    switch (status) {
      case 'Excellent':
        return 'Excellent';
      case 'Great':
        return 'Excellent';
      case 'Good':
        return 'Great';
      case 'Poor':
        return 'Good';
      case 'Concerning':
        return 'Poor';
      case 'Unknown':
        return 'Unknown';
      default:
        return 'Good';
    }
  };

  oneUpValue = (title, status) => {
    if (title === 'Vegetables') {
      switch (status) {
        case 'Concerning':
          this.props.vegetablesChanged({ prop: 'vegetablesServingsSelected', value: 1 });
          break;
        case 'Poor':
          this.props.vegetablesChanged({ prop: 'vegetablesServingsSelected', value: 2 });
          break;
        case 'Good':
          this.props.vegetablesChanged({ prop: 'vegetablesServingsSelected', value: 3 });
          break;
        case 'Take the quiz':
          this.props.vegetablesChanged({ prop: 'vegetablesServingsSelected', value: 3 });
          break;
        case 'Great':
          this.props.vegetablesChanged({ prop: 'vegetablesServingsSelected', value: 5 });
          break;
        case 'Excellent':
          this.props.vegetablesChanged({ prop: 'vegetablesServingsSelected', value: 6 });
          break;
        default:
          this.setState({ day: 1 });
          break;
      }
    }
    if (title === 'Fruits') {
      switch (status) {
        case 'Poor':
          this.props.fruitsChanged({ prop: 'fruitsDaysSelected', value: 4 });
          this.props.fruitsChanged({ prop: 'fruitsServingsSelected', value: 1 });
          break;
        case 'Good':
          this.props.fruitsChanged({ prop: 'fruitsDaysSelected', value: 7 });
          this.props.fruitsChanged({ prop: 'fruitsServingsSelected', value: 1 });
          break;
        case 'Take the quiz':
          this.props.fruitsChanged({ prop: 'fruitsDaysSelected', value: 7 });
          this.props.fruitsChanged({ prop: 'fruitsServingsSelected', value: 1 });
          break;
        case 'Great':
          this.props.fruitsChanged({ prop: 'fruitsDaysSelected', value: 7 });
          this.props.fruitsChanged({ prop: 'fruitsServingsSelected', value: 2 });
          break;
        case 'Excellent':
          this.props.fruitsChanged({ prop: 'fruitsDaysSelected', value: 7 });
          this.props.fruitsChanged({ prop: 'fruitsServingsSelected', value: 4 });
          break;
        default:
          this.props.fruitsChanged({ prop: 'fruitsDaysSelected', value: 4 });
          this.props.fruitsChanged({ prop: 'fruitsServingsSelected', value: 1 });
          break;
      }
    }
    if (title === 'Dairy') {
      switch (status) {
        case 'Poor':
          this.props.dairyChanged({ prop: 'dairyDaysSelected', value: 2 });
          break;
        case 'Good':
          this.props.dairyChanged({ prop: 'dairyDaysSelected', value: 4 });
          break;
        case 'Take the quiz':
          this.props.dairyChanged({ prop: 'dairyDaysSelected', value: 4 });
          break;
        case 'Great':
          this.props.dairyChanged({ prop: 'dairyDaysSelected', value: 7 });
          break;
        case 'Excellent':
          this.props.dairyChanged({ prop: 'dairyDaysSelected', value: 7 });
          break;
        default:
          this.props.dairyChanged({ prop: 'dairyDaysSelected', value: 4 });
          break;
      }
    }
    if (title === 'Protein') {
      switch (status) {
        case 'Concerning':
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 4 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 1 });
          break;
        case 'Poor':
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 7 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 1 });
          break;
        case 'Good':
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 7 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 2 });
          break;
        case 'Take the quiz':
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 7 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 2 });
          break;
        case 'Great':
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 7 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 3 });
          break;
        case 'Excellent':
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 7 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 3 });
          break;
        default:
          this.props.proteinChanged({ prop: 'proteinDaysSelected', value: 4 });
          this.props.proteinChanged({ prop: 'proteinServingsSelected', value: 1 });
          break;
      }
    }
    if (title === 'Water') {
      switch (status) {
        case 'Poor':
        this.props.waterChanged({ prop: 'waterServingsSelected', value: 2 });
          break;
        case 'Good':
          this.props.waterChanged({ prop: 'waterServingsSelected', value: 4 });
          break;
        case 'Take the quiz':
          this.props.waterChanged({ prop: 'waterServingsSelected', value: 4 });
          break;
        case 'Great':
          this.props.waterChanged({ prop: 'waterServingsSelected', value: 6 });
          break;
        case 'Excellent':
          this.props.waterChanged({ prop: 'waterServingsSelected', value: 7 });
          break;
        default:
          this.props.waterChanged({ prop: 'waterServingsSelected', value: 1 });
          break;
      }
    }
  }
  showModal = () => {
    this.setState({ showModal: true });
  }
  done = () => {
    this.setState({ showModal: false });
  }
  goalTitleCheck = (title) => {
    switch (title) {
      case 'Vegetables':
        return 'Vegetable';
      case 'Fruits':
        return 'Fruit';
      case 'Dairy':
        return 'Dairy';
      case 'Protein':
        return 'Protein';
      case 'Water':
        return 'Water';
      default:
        return 'Vegetable';
    }
  }
  icon = () => {
    return (
      <View>
      <Icon
        name='info'
        type='feather'
        color={'#3C3E47'}
        size={responsiveWidth(5)}
        component={TouchableOpacity}
      //  containerStyle={styles.iconContainerViewStyle}
        onPress={this.show}
      />
      </View>
    );
  }

  arrowIcon = () => {
    return (
      <View>
      <Icon
        name='md-arrow-forward'
        type='ionicon'
        color={'#6D707D'}
        size={responsiveWidth(6.5)}
      //  component={TouchableOpacity}
      //  containerStyle={styles.iconContainerViewStyle}
      //  onPress={this.show}
      />
      </View>
    );
  }

  flatListItemSeparator = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#F0F0F0',
          // marginLeft: 5,
          //marginRight: 30
        }}
      />
    );
  }
  checkContainerSize = (title) => {
    switch (title) {
      case 'Vegetables':
        return (LIST_HEIGHT * 4);
      case 'Fruits':
        return (LIST_HEIGHT * 4);
      case 'Dairy':
        return (LIST_HEIGHT * 4);
      case 'Protein':
        return (LIST_HEIGHT * 4);
      case 'Water':
        return (LIST_HEIGHT * 4);
      default:
        return null;
      }
  }

  checkColor = (color) => {
    switch (color) {
      case 'Excellent':
        return '#009fff';
      case 'Great':
        return '#1DE1B5';
      case 'Good':
        return '#FFD700';
      case 'Poor':
        return '#FF8C00';
      case 'Concerning':
        return '#ff0000';
      case 'Take the quiz':
        return '#B0B3C2';
      case 'Not Available':
        return '#B0B3C2';
      default:
        return '#ff0000';
    }
  };
  checkData = ({ data, dataDairy, dataFruits, dataProtein, dataWater }) => {
    if (this.props.title === 'Dairy') {
      return dataDairy;
    }
    if (this.props.title === 'Fruits') {
      return dataFruits;
    }
    if (this.props.title === 'Protein') {
      return dataProtein;
    }
    if (this.props.title === 'Water') {
      return dataWater;
    }
    return data;
  }

  checkNewStatus = () => {
    if (this.props.newStatus === '') {
      return this.oneUpStatus(this.props.status);
    }
      return this.props.newStatus;
  }
  checkStatusUnknown = () => {
    if (this.props.status === 'Take the quiz') {
      return 'Unknown';
    }
      return this.props.status;
  }
  renderItem(list) {
    if (list.item.title === 'Vegetables') {
       return (
       <NewGoalsListItemVeg
          data={list.item}
          key={list.key}
       />
     );
    }
    if (list.item.title === 'Fruits') {
       return (
       <NewGoalsListItemFruits
          data={list.item}
          key={list.key}
       />
     );
    }
    if (list.item.title === 'Dairy') {
       return (
       <NewGoalsListItemDairy
          data={list.item}
          key={list.key}
       />
     );
    }
    if (list.item.title === 'Protein') {
       return (
       <NewGoalsListItemProtein
          data={list.item}
          key={list.key}
       />
     );
    }
    if (list.item.title === 'Water') {
       return (
       <NewGoalsListItemWater
          data={list.item}
          key={list.key}
       />
     );
    }
  }
  render() {
    const data = [
      {
        option: 'Days a week',
        title: 'Vegetables',
        value: this.props.vegetablesDaysSelected,
        key: 1
      },
      {
        option: 'Servings a day',
        title: this.props.title,
        value: this.props.vegetablesServingsSelected,
        key: 2
      },
      {
        option: 'Remind me',
        title: this.props.title,
        value: this.props.vegetablesRemindMeSelected,
        key: 3
      },
      {
        option: 'At',
        title: this.props.title,
        value: '5.30pm',
        key: 4
      },
      {
        option: 'Start Goal',
        title: this.props.title,
        key: 5
      }
    ];
    const dataDairy = [
      {
        option: 'Days a week',
        title: 'Dairy',
        value: this.props.dairyDaysSelected,
        key: 1
      },
      {
        option: 'Remind me',
        title: 'Dairy',
        value: this.props.dairyRemindMeSelected,
        key: 2
      },
      {
        option: 'At',
        title: 'Dairy',
        value: '5.30pm',
        key: 3
      },
      {
        option: 'Start Goal',
        title: 'Dairy',
        key: 4
      }
    ];

    const dataFruits = [
      {
        option: 'Days a week',
        title: 'Fruits',
        value: this.props.fruitsDaysSelected,
        key: 1
      },
      {
        option: 'Servings a day',
        title: 'Fruits',
        value: this.props.fruitsServingsSelected,
        key: 2
      },
      {
        option: 'Remind me',
        title: 'Fruits',
        value: this.props.fruitsRemindMeSelected,
        key: 3
      },
      {
        option: 'At',
        title: 'Fruits',
        value: 'a',
        key: 4
      },
      {
        option: 'Start Goal',
        title: 'Fruits',
        key: 5
      }
    ];
    const dataProtein = [
      {
        option: 'Days a week',
        title: 'Protein',
        value: this.props.proteinDaysSelected,
        key: 1
      },
      {
        option: 'Servings a day',
        title: 'Protein',
        value: this.props.proteinServingsSelected,
        key: 2
      },
      {
        option: 'Remind me',
        title: 'Protein',
        value: this.props.proteinRemindMeSelected,
        key: 3
      },
      {
        option: 'At',
        title: 'Protein',
        value: 'a',
        key: 4
      },
      {
        option: 'Start Goal',
        title: 'Protein',
        key: 5
      }
    ];
    const dataWater = [
      {
        option: 'Servings a day',
        title: 'Water',
        value: this.props.waterServingsSelected,
        key: 1
      },
      {
        option: 'Remind me',
        title: 'Water',
        value: this.props.waterRemindMeSelected,
        key: 2
      },
      {
        option: 'At',
        title: 'Water',
        value: 'a',
        key: 3
      },
      {
        option: 'Start Goal',
        title: 'Water',
        key: 4
      }
    ];

//    const { dispatch, /* navigate  */} = this.props.navigation;
//    const backAction = NavigationActions.back({ key: null });
    return (
      <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.goalTitleSection}>
        <Text style={styles.textStyle}>{this.props.title} </Text>
        {this.icon()}
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: '#F0F0F0' }} />
        <View style={styles.goalProgressSection}>
          <View style={styles.goalProgressLeft}>
          <Text
          style={[styles.goalTitleStyle, { color: this.checkColor(this.props.status) }]}
          >{this.checkStatusUnknown()}</Text>
          <Text style={styles.goalProgressTextStyle}>Current</Text>
          </View>
          <View style={styles.goalProgressCenter}>
          {this.arrowIcon()}
          </View>
          <View style={styles.goalProgressRight}>
          <Text
          style={
            [styles.goalTitleStyle,
            { color: this.checkColor(this.checkNewStatus()),
              paddingLeft: 0,
              paddingRight: 20 }]
          }
          >{this.checkNewStatus()}</Text>
          <Text
          style={
            [styles.goalProgressTextStyle, {
            paddingLeft: 0,
            paddingRight: 20 }]}
          >Goal</Text>
          </View>
        </View>
      </View>


        <View style={[styles.contentContainer, { height: this.checkContainerSize() }]}>
        <View style={{ height: 0 }} />
          <FlatList
              data={this.checkData({ data, dataDairy, dataFruits, dataProtein, dataWater })}
              extraData={this.props}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.key}
              ItemSeparatorComponent={this.flatListItemSeparator}
              scrollEnabled={false}
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
return { nutritionFinal: state.nutrition.nutritionFinal,
  vegeWeek1: state.nutrition.vegeWeek1,
  title: state.goals.title,
  status: state.goals.status,
  newStatus: state.goals.newStatus,
  vegeDay2: state.nutrition.vegeDay2,
  fruitDay4: state.nutrition.fruitDay4,
  vegetablesRemindMeSelected: state.nutritionGoalsVegetables.vegetablesRemindMeSelected,
  vegetablesRemindMe: state.nutritionGoalsVegetables.vegetablesRemindMe,
  vegetablesDaysSelected: state.nutritionGoalsVegetables.vegetablesDaysSelected,
  vegetablesServingsSelected: state.nutritionGoalsVegetables.vegetablesServingsSelected,
  fruitsRemindMeSelected: state.nutritionGoalsFruits.fruitsRemindMeSelected,
  fruitsRemindMe: state.nutritionGoalsFruits.fruitsRemindMe,
  fruitsDaysSelected: state.nutritionGoalsFruits.fruitsDaysSelected,
  fruitsServingsSelected: state.nutritionGoalsFruits.fruitsServingsSelected,

  dairyRemindMeSelected: state.nutritionGoalsDairy.dairyRemindMeSelected,
  dairyRemindMe: state.nutritionGoalsDairy.dairyRemindMe,
  dairyDaysSelected: state.nutritionGoalsDairy.dairyDaysSelected,

  proteinRemindMeSelected: state.nutritionGoalsProtein.proteinRemindMeSelected,
  proteinRemindMe: state.nutritionGoalsProtein.proteinRemindMe,
  proteinDaysSelected: state.nutritionGoalsProtein.proteinDaysSelected,
  proteinServingsSelected: state.nutritionGoalsProtein.proteinServingsSelected,

  waterRemindMeSelected: state.nutritionGoalsWater.waterRemindMeSelected,
  waterRemindMe: state.nutritionGoalsWater.waterRemindMe,
  waterServingsSelected: state.nutritionGoalsWater.waterServingsSelected,

};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FAFBFC',
  },
  contentContainer: {
    height: LIST_HEIGHT * 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 0,
    borderRadius: 10,
    margin: 20,
    marginTop: 10,
    backgroundColor: 'white'
  //  paddingLeft: 25,
  //  paddingRight: 25,
  //  backgroundColor: 'green',
  },
  topSection: {
    height: LIST_HEIGHT * 2,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 0,
    borderRadius: 10,
    margin: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  goalTitleSection: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  goalProgressSection: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  goalProgressLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  //  paddingLeft: 25
  //  backgroundColor: 'green',
  },
  goalProgressCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: 'yellow',
  },
  goalProgressRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  //  paddingRight: 25,
  //  backgroundColor: 'blue',
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
  goalProgressTextStyle: {
    color: '#6D707D',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'circular',
    paddingLeft: 20,
  },
  goalTitleStyle: {
    fontSize: responsiveFontSize(2.2),
    paddingTop: 0,
    paddingLeft: 20,
    fontFamily: 'circular',
    color: '#19A6FF'
  },
  goalTopTitleStyle: {
    fontSize: responsiveFontSize(2.2),
    paddingTop: 0,
    fontFamily: 'circular-bold',
    color: '#19A6FF'
  },
  iconContainerViewStyle: {
    width: 40,
    marginLeft: -4,
    paddingLeft: 0,
    paddingTop: 3,
  //  backgroundColor: 'red'
  //  justifyContent: 'flex-start'
  },
  textStyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'circular-bold',
    color: '#3C3E47',
  },
  ratingsContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
//    backgroundColor: 'orange'
  }

});

export default connect(mapStateToProps, {
  vegetablesChanged, fruitsChanged, dairyChanged, proteinChanged, waterChanged
})(NewGoal);
