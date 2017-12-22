import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { HeaderSection, ModalScreen, Ratings } from '../components';
import { nutritionChanged } from './Qs/NutritionQs/nutritionActions';
import baseStyles from './baseStyles';
import ListItem from './ListItem';

/*

  export const facebookLogin = () => async dispatch => {
    const token = await AsyncStorage.getItem('fb_token');
    */
class HealthTab extends Component {
  state = { showModal: false };

  onPress = (key) => {
    this.props.navigation.navigate(key);
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
        size={25}
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
        status: 'Take the quiz',
        key: 1
      },
      { title: 'Nutrition',
        status: this.props.nutritionFinal.status,
        key: 2
        //`${this.props.nutritionFinal.status}`,
      },
      { title: 'Exercise',
        status: 'Take the quiz',
        key: 3
      },
      { title: 'Sleep',
        status: 'Take the quiz',
        key: 4
      },
      { title: 'Mood',
        status: 'Take the quiz',
        key: 5
      },
      { title: 'Alcohol & Smoking',
        status: 'Take the quiz',
        key: 6
      },
    ];
    const { container, contentContainer } = baseStyles;
    const renderItem = (list) => {
       return (
       <ListItem
       data={list.item}
       onPress={() => this.onPress(list.item.title)}
       />
     );
    };
    return (

      <View style={container}>

      <HeaderSection
      subHeaderText='Health'
      subHeaderRight={this.icon()}
      subSubHeaderText='Overview of your health habits'
  //    center='hello'
      />
        <View style={contentContainer}>
          <FlatList
              data={data}
              renderItem={renderItem}
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
  }


});

export default connect(mapStateToProps, { nutritionChanged })(HealthTab);
