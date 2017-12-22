import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';

class NutritionQ4 extends Component {

  onAdd = () => {
    const { fruitDay4 } = this.props;
  const added = fruitDay4 + 1;
  this.props.nutritionChanged({ prop: 'fruitDay4', value: added });
  }
  onMinus = () => {
    const { fruitDay4 } = this.props;
  if (fruitDay4 > 0) {
  const minused = fruitDay4 - 1;
  this.props.nutritionChanged({ prop: 'fruitDay4', value: minused });
  }
  }

  onClick = () => {
    const { fruitDay4, fruitWeek3 } = this.props;
    this.props.nutritionChanged({
      prop: 'fruits', value: calculate('fruits', fruitWeek3, fruitDay4) });
    this.props.navigation.navigate('NutritionQ5');
  }

  servingsADay() {
    if (this.props.fruitDay4 > 1) {
      return ('Servings a day');
    }
      return ('Serving a day');
  }

  render() {
    const { fruitDay4, fruitWeek3, fruits, vegetables } = this.props;
    console.log(`${fruitWeek3} fruitWeek3,
      ${fruitDay4} fruitDay4, ${fruits.score} fruits, ${vegetables.score} vegetables, NutritionQ4`);
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
          <Progress value={4 / 9} text={'4/9'} />
          </View>
          <View style={textSection}>
          <Text style={textStyle}>
          {'How many servings of fruit do you eat per day?'}
          {'\n'}
          </Text>
          <Text style={smallTextStyle}>
          {'Tip: One serving is the size of your closed fist'}
          </Text>
          </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {this.props.fruitDay4}
          </Text>
          <Text style={{ fontSize: 20, color: 'white' }}>
          {this.servingsADay()}
          </Text>

          </View>
          <View style={AddMinusSection}>
          <AddMinusButtons onAdd={() => this.onAdd()} onMinus={() => this.onMinus()} />
          </View>

          <View style={lastSection}>
          <OneButton title={'Next'} onPress={this.onClick} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { fruitDay4: state.nutrition.fruitDay4,
            fruitWeek3: state.nutrition.fruitWeek3,
            fruits: state.nutrition.fruits,
            vegetables: state.nutrition.vegetables };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ4);
