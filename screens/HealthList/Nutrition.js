import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { HeaderSection, BackButton, Ratings, ModalScreen } from '../../components';
//import { vegeWeek1Changed } from '../../../actions';
import HealthStyles from './HealthStyles';
import NutritionListItem from './NutritionListItem';


class Nutrition extends Component {
  state = { showModal: false };
  onPress = () => {
    this.props.navigation.navigate('Goals');
  }
  done = () => {
  this.setState({ showModal: false });
  }
  show = () => {
  this.setState({ showModal: true });
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
    //    containerStyle={iconContainerViewStyle}
        onPress={this.show}
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
  render() {
    const {
    vegeWeek1, vegeDay2, fruitWeek3, fruitDay4, proteinWeek5, meatDay6, dairyQ,
    nonMeatDay7, dairyWeek8, waterDay9, vegetables, fruits, proteins, dairy, water,
    } = this.props;

    const data = [
      { title: 'Vegetables',
        subTitle: `${vegeWeek1} days a week, `,
        subSubTitle: `${vegeDay2} servings a day`,
        status: vegetables.status },
      { title: 'Fruit',
        subTitle: `${fruitWeek3} days a week, `,
        subSubTitle: `${fruitDay4} servings a day`,
        status: fruits.status },
      { title: 'Protein',
        subTitle: `${proteinWeek5} days a week, `,
        subSubTitle: `${meatDay6 + nonMeatDay7} servings a day`,
        status: proteins.status },
      { title: 'Dairy',
        subTitle: (dairyQ !== 'none') ? 'Not Available' : `${dairyWeek8} days a week, `,
        status: (dairyQ !== 'none') ? 'Not Available' : dairy.status,
      },
      { title: 'Water',
        subSubTitle: `${waterDay9} glasses a day, `,
        status: water.status },
    ];
    const { container, contentContainer } = HealthStyles;
    const { dispatch, /* navigate  */} = this.props.navigation;
    const backAction = NavigationActions.back({ key: null });
    const renderItem = (list) => {
       return <NutritionListItem data={list.item} onPress={this.onPress} />;
    };

    return (
      <View style={container}>
      <HeaderSection
      left={<BackButton onPress={() => dispatch(backAction)} color='#3C3E47' />}
      subHeaderText='Nutrition'
      subHeaderRight={this.icon()}
      subSubHeaderText='Overview of your health habits'
      />

        <View style={contentContainer}>
        <View style={{ height: 0 }} />
          <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
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
  vegeDay2: state.nutrition.vegeDay2,
  fruitWeek3: state.nutrition.fruitWeek3,
  fruitDay4: state.nutrition.fruitDay4,
  proteinWeek5: state.nutrition.proteinWeek5,
  meatDay6: state.nutrition.meatDay6,
  nonMeatDay7: state.nutrition.nonMeatDay7,
  dairyWeek8: state.nutrition.dairyWeek8,
  waterDay9: state.nutrition.waterDay9,
  water: state.nutrition.water,
  proteins: state.nutrition.proteins,
  vegetables: state.nutrition.vegetables,
  fruits: state.nutrition.fruits,
  dairy: state.nutrition.dairy,
  dairyQ: state.nutrition.dairyQ,
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

export default connect(mapStateToProps, {})(Nutrition);
