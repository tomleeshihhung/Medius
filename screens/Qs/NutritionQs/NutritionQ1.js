import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons, Progress,
  BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';

class NutritionQ1 extends Component {

    onAdd() {
    const { vegeWeek1 } = this.props;
    const added = vegeWeek1 + 1;
    if (vegeWeek1 < 6) {
    this.props.nutritionChanged({ prop: 'vegeWeek1', value: added });
    } else if (vegeWeek1 === 6) {
      this.props.nutritionChanged({ prop: 'vegeWeek1', value: added });
    }
    }
    onMinus() {
    const { vegeWeek1 } = this.props;
    if (vegeWeek1 > 0) {
      const minused = vegeWeek1 - 1;
      this.props.nutritionChanged({ prop: 'vegeWeek1', value: minused });
    } else if (vegeWeek1 === 7) {
      const six = 6;
      this.props.nutritionChanged({ prop: 'vegeWeek1', value: six });
    }
    }
    onClick = () => {
      const { vegeDay2, vegeWeek1 } = this.props;
      this.props.nutritionChanged({
        prop: 'vegetables', value: calculate('vegetables', vegeWeek1, vegeDay2) });
      this.props.navigation.navigate('NutritionQ2');
    }
    daysAWeek() {
      if (this.props.vegeWeek1 === 7) {
        return ('');
      }
      if (this.props.vegeWeek1 > 1) {
        return ('Days a week');
      }
        return ('Day a week');
    }

  render() {
    const { vegeDay2, vegeWeek1, vegetables } = this.props;
    console.log(`${vegeWeek1} vegeWeek1,
      ${vegeDay2} vegeDay2, ${vegetables.score} vegetables, NutritionQ1`);
    const { container, contentContainer, titleSection,
     AmountSection, AddMinusSection, iconContainerViewStyle,
    textSection, lastSection, textStyle, amountTextStyle, descriptionTextStyle } = nutritionStyles;
    const { dispatch } = this.props.navigation;
    const backAction = NavigationActions.back({ key: null });
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
          <Progress value={1 / 9} text={'1/9'} />
          </View>

          <View style={textSection}>
          <Text style={textStyle}>
          {'How many days a week do you eat vegetables with your meals? (Not including hot chips)'}
          </Text>
          </View>

          <View style={AmountSection}>
          <Text style={amountTextStyle}>
          {(this.props.vegeWeek1 === 7) ? 'Daily' : this.props.vegeWeek1}
          </Text>
          <Text style={descriptionTextStyle}>
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
  return { vegeWeek1: state.nutrition.vegeWeek1,
    vegeDay2: state.nutrition.vegeDay2,
    vegetables: state.nutrition.vegetables };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ1);
