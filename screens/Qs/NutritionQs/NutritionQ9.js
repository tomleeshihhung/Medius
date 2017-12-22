//import { Constants } from 'expo';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate, nutritionFinalCalculate, noDairyFinalCalculate } from './nutritionHelper';


class NutritionQ9 extends Component {

  onAdd = () => {
    const { waterDay9 } = this.props;
  const added = waterDay9 + 1;
  this.props.nutritionChanged({ prop: 'waterDay9', value: added });
  this.props.nutritionChanged({
    prop: 'water', value: calculate('water', added)
  });
  }
  onMinus = () => {
    const { waterDay9 } = this.props;
  if (waterDay9 > 0) {
  const minused = waterDay9 - 1;
  this.props.nutritionChanged({ prop: 'waterDay9', value: minused });
  this.props.nutritionChanged({
    prop: 'water', value: calculate('water', minused)
  });
  }
  }

  onClick = () => {
    const { waterDay9, vegetables, fruits, proteins, dairy, water, dairyQ } = this.props;
    this.props.nutritionChanged({
      prop: 'water', value: calculate('water', waterDay9)
    });
    if (dairyQ === 'none') {
      this.props.nutritionChanged({ prop: 'nutritionFinal',
      value: nutritionFinalCalculate(
        vegetables, fruits, proteins, dairy, water
        ) }
      );
    } else {
      this.props.nutritionChanged({ prop: 'nutritionFinal',
      value: noDairyFinalCalculate(
        vegetables, fruits, proteins, water
        ) }
      );
    }
    this.props.navigation.navigate('Health');
  }

  glassesADay() {
    if (this.props.waterDay9 > 1) {
      return ('Glasses a day');
    }
      return ('Glass a day');
  }

  render() {
    const { waterDay9, vegetables, fruits, proteins, dairy, water, dairyQ } = this.props;
    console.log(`${waterDay9} waterDay9,
      ${vegetables} vegetables, ${fruits} fruits, ${proteins} proteins,
      ${dairy} dairy, ${water} water, ${dairyQ} dairyQ,NutritionQ9`);
    console.log(this.props.waterDay9, this.props.water);
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
          <Progress value={9 / 9} text={'9/9'} />
                </View>
                <View style={textSection}>
                <Text style={textStyle}>
                {'How many glasses of water do you drink per day?'}
                {'\n'}
                </Text>
                <Text style={smallTextStyle}>
                {'Tip: It can be plain water, tea, coffee, juice or soup. '}
                {'One glass is 200ml or one cup.'}
                </Text>
                </View>
          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {this.props.waterDay9}
          </Text>
          <Text style={{ fontSize: 20, color: 'white' }}>
          {this.glassesADay()}
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
  return { waterDay9: state.nutrition.waterDay9,
            water: state.nutrition.water.score,
            proteins: state.nutrition.proteins.score,
            vegetables: state.nutrition.vegetables.score,
            fruits: state.nutrition.fruits.score,
            dairy: state.nutrition.dairy.score,
            dairyQ: state.nutrition.dairyQ
          };
};

export default connect(mapStateToProps,
  { nutritionChanged })(NutritionQ9);
