import { Constants } from 'expo';
import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { HeaderSection, BackButton, Ratings, ModalScreen } from '../../components';
import NewGoalsListItem from './NewGoalsListItem';
import { goalsChanged, vegetablesChanged } from './Nutrition/Vegetables/goalsActions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIST_HEIGHT = (SCREEN_HEIGHT - 213) / 6;

class NewGoal extends Component {
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
          this.setState({ week: 4, day: 1 });
          break;
        case 'Good':
          this.setState({ day: 1 });
          break;
        case 'Great':
          this.setState({ day: 2 });
          break;
        case 'Excellent':
          this.setState({ day: 4 });
          break;
        default:
          this.setState({ day: 1 });
          break;
      }
    }
    if (title === 'Dairy') {
      switch (status) {
        case 'Poor':
          this.setState({ week: 2 });
          break;
        case 'Good':
          this.setState({ week: 4 });
          break;
        case 'Great':
          this.setState({ week: 7 });
          break;
        case 'Excellent':
          this.setState({ week: 7 });
          break;
        default:
          this.setState({ week: 7 });
          break;
      }
    }
    if (title === 'Protein') {
      switch (status) {
        case 'Concerning':
          this.setState({ week: 4, day: 1 });
          break;
        case 'Poor':
          this.setState({ day: 1 });
          break;
        case 'Good':
          this.setState({ day: 2 });
          break;
        case 'Great':
          this.setState({ day: 3 });
          break;
        case 'Excellent':
          this.setState({ day: this.props.vegeDay2 + 1 });
          break;
        default:
          this.setState({ day: 1 });
          break;
      }
    }
    if (title === 'Water') {
      switch (status) {
        case 'Poor':
          this.setState({ day: 2 });
          break;
        case 'Good':
          this.setState({ day: 4 });
          break;
        case 'Great':
          this.setState({ day: 6 });
          break;
        case 'Excellent':
          this.setState({ day: 7 });
          break;
        default:
          this.setState({ day: 1 });
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
      <View style={{ paddingBottom: 21 }}>
      <Icon
        name='info'
        type='feather'
        color={'#3C3E47'}
        size={25}
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
        size={23}
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
  checkData = (data, dataDairy) => {
    if (this.props.title === 'Dairy') {
      return dataDairy;
    }
    return data;
  }

  checkNewStatus = () => {
    if (this.props.newStatus === '') {
      console.log(this.props.newStatus);
      console.log('new');
      return this.oneUpStatus(this.props.status);
    }
    console.log(this.props.newStatus);
    console.log('old');
      return this.props.newStatus;
  }
  renderItem(list) {
       return (
       <NewGoalsListItem
          data={list.item}
          key={list.key}
       />
     );
  }
  render() {
    const data = [
      {
        option: 'Days a week',
        title: this.props.title,
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
        goal: this.props.title,
        key: 5
      }
    ];
    const dataDairy = [
      {
        option: 'Days a week',
        title: this.props.title,
        value: this.state.week,
        key: 1
      },
      {
        option: 'Remind me',
        title: this.props.title,
        value: 'Daily',
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
        goal: this.props.title,
        key: 5
      }
    ];

    const { container, contentContainer } = styles;
    const { dispatch, /* navigate  */} = this.props.navigation;
    const backAction = NavigationActions.back({ key: null });
    return (
      <View style={container}>
      <HeaderSection
      left={<BackButton onPress={() => dispatch(backAction)} color='#3C3E47' />}
      subHeaderText={`${this.goalTitleCheck(this.props.title)} goal`}
      subHeaderRight={this.icon()}
      />
      <View style={styles.goalProgressSection}>
      <View style={styles.goalProgressLeft}>
      <Text
      style={[styles.goalTitleStyle, { color: this.checkColor(this.props.status) }]}
      >{this.props.status}</Text>
      <Text style={styles.goalProgressTextStyle}>Current</Text>
      </View>
      <View style={styles.goalProgressCenter}>
      {this.arrowIcon()}
      </View>
      <View style={styles.goalProgressRight}>
      <Text
      style={
        [styles.goalTitleStyle, { color: this.checkColor(this.checkNewStatus()) }]
      }
      >{this.checkNewStatus()}</Text>
      <Text style={styles.goalProgressTextStyle}>Goal</Text>
      </View>
      </View>
        <View style={contentContainer}>
        <View style={{ height: 0 }} />
          <FlatList
              data={this.checkData(data, dataDairy)}
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
//  title: props.navigation.state.params.title,
//  status: props.navigation.state.params.status,
  vegeDay2: state.nutrition.vegeDay2,
  fruitDay4: state.nutrition.fruitDay4,
  vegetablesRemindMeSelected: state.nutritionGoalsVegetables.vegetablesRemindMeSelected,
  vegetablesRemindMe: state.nutritionGoalsVegetables.vegetablesRemindMe,
  vegetablesDaysSelected: state.nutritionGoalsVegetables.vegetablesDaysSelected,
  vegetablesServingsSelected: state.nutritionGoalsVegetables.vegetablesServingsSelected,

};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',

  },
  contentContainer: {
    flex: 1,
  //  paddingLeft: 25,
  //  paddingRight: 25,
  //  backgroundColor: 'green',
  },
  goalProgressSection: {
    height: LIST_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FAFBFC'
  },
  goalProgressLeft: {
    flex: 3,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  //  paddingLeft: 25
  //  backgroundColor: 'green',
  },
  goalProgressCenter: {
    flex: 1,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: 'yellow',
  },
  goalProgressRight: {
    flex: 3,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  //  paddingRight: 25,
  //  backgroundColor: 'blue',
  },
  smallTextStyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.1),
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
  },
  goalTitleStyle: {
    fontSize: responsiveFontSize(2.4),
    paddingTop: 0,
    fontFamily: 'circular',
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

  ratingsContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
//    backgroundColor: 'orange'
  }

});

export default connect(mapStateToProps, { goalsChanged, vegetablesChanged })(NewGoal);
