import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';


class NutritionQ3 extends Component {

  onAdd() {
  const { fruitWeek3 } = this.props;
  const added = fruitWeek3 + 1;
  if (fruitWeek3 < 6) {
  this.props.nutritionChanged({ prop: 'fruitWeek3', value: added });
  } else if (fruitWeek3 === 6) {
    this.props.nutritionChanged({ prop: 'fruitWeek3', value: added });
  }
  }
  onMinus() {
  const { fruitWeek3 } = this.props;
  if (fruitWeek3 > 0) {
    const minused = fruitWeek3 - 1;
    this.props.nutritionChanged({ prop: 'fruitWeek3', value: minused });
  } else if (fruitWeek3 === 7) {
    const six = 6;
    this.props.nutritionChanged({ prop: 'fruitWeek3', value: six });
  }
  }
  onClick = () => {
    const { fruitDay4, fruitWeek3 } = this.props;
    this.props.nutritionChanged({
      prop: 'fruits', value: calculate('fruits', fruitWeek3, fruitDay4) });
    this.props.navigation.navigate('NutritionQ4');
  }
  daysAWeek() {
    if (this.props.fruitWeek3 === 7) {
      return ('');
    }
    if (this.props.fruitWeek3 > 1) {
      return ('Days a week');
    }
      return ('Day a week');
  }

  render() {
    const { fruitDay4, fruitWeek3, fruits, vegetables } = this.props;
    console.log(`${fruitWeek3} fruitWeek3,
      ${fruitDay4} fruitDay4, ${fruits.score} fruits, ${vegetables.score} vegetables, NutritionQ3`);
    const { container, contentContainer, titleSection, iconContainerViewStyle,
     AmountSection, AddMinusSection,
    textSection, lastSection, textStyle } = nutritionStyles;
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
          <Progress value={3 / 9} text={'3/9'} />
        </View>
        <View style={textSection}>
        <Text style={textStyle}>
        {'How many days a week do you eat fruit?'}
        </Text>
        </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {(this.props.fruitWeek3 === 7) ? 'Daily' : this.props.fruitWeek3}
          </Text>
          <Text style={{ fontSize: 20, color: 'white' }}>
          {this.daysAWeek()}
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
  return { fruitWeek3: state.nutrition.fruitWeek3,
    fruitDay4: state.nutrition.fruitDay4,
    fruits: state.nutrition.fruits,
    vegetables: state.nutrition.vegetables
   };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ3);
