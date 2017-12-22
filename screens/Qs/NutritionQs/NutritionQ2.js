import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';

class NutritionQ2 extends Component {

    onAdd = () => {
      const { vegeDay2 } = this.props;
    const added = vegeDay2 + 1;
    this.props.nutritionChanged({ prop: 'vegeDay2', value: added });
  //  this.props.goalChanged({ prop: 'vegetablesRemindMe', value: data.title });
    }
    onMinus = () => {
      const { vegeDay2 } = this.props;
    if (vegeDay2 > 0) {
    const minused = vegeDay2 - 1;
    this.props.nutritionChanged({ prop: 'vegeDay2', value: minused });
    }
    }
    onClick = () => {
      const { vegeDay2, vegeWeek1 } = this.props;
      this.props.nutritionChanged({
        prop: 'vegetables', value: calculate('vegetables', vegeWeek1, vegeDay2) });
      this.props.navigation.navigate('NutritionQ3');
    }
    servingsADay() {
      if (this.props.vegeDay2 > 1) {
        return ('Servings a day');
      }
        return ('Serving a day');
    }

  render() {
    const { vegeDay2, vegeWeek1, vegetables } = this.props;
    console.log(`${vegeWeek1} vegeWeek1,
      ${vegeDay2} vegeDay2, ${vegetables.score} vegetables, NutritionQ2`);
    const { container, contentContainer, titleSection,
     AmountSection, AddMinusSection, iconContainerViewStyle,
    textSection, lastSection, textStyle, smallTextStyle } = nutritionStyles;
    const { dispatch } = this.props.navigation;
    const backAction = NavigationActions.back({
  key: null
});
    return (
      <View style={container}>
        <HeaderSection
        left={<BackButton
        containerStyle={iconContainerViewStyle}
        onPress={() => dispatch(backAction)}
        />}
        />

        <View style={contentContainer}>

          <View style={titleSection}>
          <Progress value={2 / 9} text={'2/9'} />
          </View>

          <View style={textSection}>
          <Text style={textStyle}>
          {'How many servings of vegetables do you eat per day?'}
          {'\n'}
          </Text>
          <Text style={smallTextStyle}>
          {'Tip: One serving is the size of your closed fist'}
          </Text>
          </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {vegeDay2}
          </Text>
          <Text style={{ fontSize: 20, color: 'white' }}>
          {this.servingsADay()}
          </Text>

          </View>
          <View style={AddMinusSection}>
          <AddMinusButtons onAdd={() => this.onAdd()} onMinus={() => this.onMinus()} />
          </View>

          <View style={lastSection}>
          <OneButton
          title={'Next'}
          onPress={this.onClick}
          />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { vegeWeek1: state.nutrition.vegeWeek1,
           vegeDay2: state.nutrition.vegeDay2,
           vegetables: state.nutrition.vegetables };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ2);
