//import { Constants } from 'expo';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';


class NutritionQ8 extends Component {

  onAdd() {
  const { dairyWeek8 } = this.props;
  const added = dairyWeek8 + 1;
  if (dairyWeek8 < 6) {
  this.props.nutritionChanged({ prop: 'dairyWeek8', value: added });
} else if (dairyWeek8 === 6) {
    this.props.nutritionChanged({ prop: 'dairyWeek8', value: added });
  }
  }
  onMinus() {
  const { dairyWeek8 } = this.props;
  if (dairyWeek8 > 0) {
    const minused = dairyWeek8 - 1;
    this.props.nutritionChanged({ prop: 'dairyWeek8', value: minused });
  } else if (dairyWeek8 === 7) {
    const six = 6;
    this.props.nutritionChanged({ prop: 'dairyWeek8', value: six });
  }
  }
  onClick = () => {
    const { dairyWeek8 } = this.props;
    if (dairyWeek8 < 1) {
      this.props.nutritionChanged({
        prop: 'dairy', value: calculate('dairy', dairyWeek8)
      });
      this.props.navigation.navigate('DairyQ');
    } else {
    this.props.nutritionChanged({
      prop: 'dairy', value: calculate('dairy', dairyWeek8)
    });
    this.props.navigation.navigate('NutritionQ9');
    }
  }
  daysAWeek() {
    if (this.props.dairyWeek8 === 7) {
      return ('');
    }
    if (this.props.dairyWeek8 > 1) {
      return ('Days a week');
    }
      return ('Day a week');
  }

  render() {
    console.log(`${this.props.dairyWeek8} dairyWeek8,
      ${this.props.dairy.score} dairy, NutritionQ8`);
    const { container, contentContainer, titleSection,
     AmountSection, AddMinusSection, iconContainerViewStyle,
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
          <Progress value={8 / 9} text={'8/9'} />
                </View>
                <View style={textSection}>
                <Text style={textStyle}>
                {'How many days a week do you have a glass of milk'}
                {', a tub of yoghurt or a slice of cheese? '}
                {'\n'}
                </Text>
                </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {(this.props.dairyWeek8 === 7) ? 'Daily' : this.props.dairyWeek8}
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
  return { dairyWeek8: state.nutrition.dairyWeek8, dairy: state.nutrition.dairy };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ8);
