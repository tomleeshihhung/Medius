import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';

class NutritionQ7 extends Component {

  onAdd = () => {
    const { nonMeatDay7 } = this.props;
  const added = nonMeatDay7 + 1;
  this.props.nutritionChanged({ prop: 'nonMeatDay7', value: added });
  }
  onMinus = () => {
    const { nonMeatDay7 } = this.props;
  if (nonMeatDay7 > 0) {
  const minused = nonMeatDay7 - 1;
  this.props.nutritionChanged({ prop: 'nonMeatDay7', value: minused });
  }
  }

  onClick = () => {
    const { proteinWeek5, meatDay6, nonMeatDay7 } = this.props;
    this.props.nutritionChanged({
      prop: 'proteins', value: calculate('proteins', proteinWeek5, meatDay6, nonMeatDay7)
    });
    this.props.navigation.navigate('NutritionQ8');
  }

  servingsADay() {
    if (this.props.meatDay6 > 1) {
      return ('Servings a day');
    }
      return ('Serving a day');
  }

  render() {
    const { proteinWeek5, meatDay6, nonMeatDay7, proteins } = this.props;
    console.log(`${proteinWeek5} proteinWeek5,
      ${meatDay6} meatDay6, ${nonMeatDay7} nonMeatDay7, ${proteins.score} proteins, NutritionQ7`);
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
          <Progress value={7 / 9} text={'7/9'} />
          </View>
          <View style={textSection}>
          <Text style={textStyle}>
          {'How many servings of plant based protein do you eat in a day?'}
          {'\n'}
          </Text>
          <Text style={smallTextStyle}>
          {'Tip: One serving is the size of your closed fist'}
          </Text>
          </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {this.props.nonMeatDay7}
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
  return { proteinWeek5: state.nutrition.proteinWeek5,
          meatDay6: state.nutrition.meatDay6,
          nonMeatDay7: state.nutrition.nonMeatDay7,
          proteins: state.nutrition.proteins
  };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ7);
