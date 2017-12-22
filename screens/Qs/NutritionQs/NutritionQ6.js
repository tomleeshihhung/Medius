import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';

class NutritionQ6 extends Component {

  onAdd = () => {
    const { meatDay6 } = this.props;
  const added = meatDay6 + 1;
  this.props.nutritionChanged({ prop: 'meatDay6', value: added });
  }
  onMinus = () => {
    const { meatDay6 } = this.props;
  if (meatDay6 > 0) {
  const minused = meatDay6 - 1;
  this.props.nutritionChanged({ prop: 'meatDay6', value: minused });
  }
  }

  onClick = () => {
    const { proteinWeek5, meatDay6, nonMeatDay7 } = this.props;
    this.props.nutritionChanged({
      prop: 'proteins', value: calculate('proteins', proteinWeek5, meatDay6, nonMeatDay7)
    });
    this.props.navigation.navigate('NutritionQ7');
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
      ${meatDay6} meatDay6, ${nonMeatDay7} nonMeatDay7, ${proteins.score} proteins, NutritionQ6`);
    const { container, contentContainer, titleSection,
     AmountSection, AddMinusSection, textSection, iconContainerViewStyle,
     lastSection, textStyle, smallTextStyle } = nutritionStyles;
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
            <Progress value={6 / 9} text={'6/9'} />
          </View>
          <View style={textSection}>
            <Text style={textStyle}>
                {'How many servings of animal based protein do you eat in a day?'}
                {'\n'}
            </Text>
            <Text style={smallTextStyle}>
              {'Tip: One serving is the size and thickness of your palm'}
            </Text>
          </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {this.props.meatDay6}
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

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ6);
