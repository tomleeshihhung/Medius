import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton, AddMinusButtons,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
import { calculate } from './nutritionHelper';


class NutritionQ5 extends Component {


    onAdd() {
    const { proteinWeek5 } = this.props;
    const added = proteinWeek5 + 1;
    if (proteinWeek5 < 6) {
    this.props.nutritionChanged({ prop: 'proteinWeek5', value: added });
  } else if (proteinWeek5 === 6) {
      this.props.nutritionChanged({ prop: 'proteinWeek5', value: added });
    }
    }
    onMinus() {
    const { proteinWeek5 } = this.props;
    if (proteinWeek5 > 0) {
      const minused = proteinWeek5 - 1;
      this.props.nutritionChanged({ prop: 'proteinWeek5', value: minused });
    } else if (proteinWeek5 === 7) {
      const six = 6;
      this.props.nutritionChanged({ prop: 'proteinWeek5', value: six });
    }
    }
    onClick = () => {
      const { proteinWeek5, meatDay6, nonMeatDay7 } = this.props;
      this.props.nutritionChanged({
        prop: 'proteins', value: calculate('proteins', proteinWeek5, meatDay6, nonMeatDay7)
      });
      this.props.navigation.navigate('NutritionQ6');
    }
    daysAWeek() {
      if (this.props.proteinWeek5 === 7) {
        return ('');
      }
      if (this.props.proteinWeek5 > 1) {
        return ('Days a week');
      }
        return ('Day a week');
    }


  render() {
    const { proteinWeek5, meatDay6, nonMeatDay7, proteins } = this.props;
    console.log(`${proteinWeek5} proteinWeek5,
      ${meatDay6} meatDay6, ${nonMeatDay7} nonMeatDay7, ${proteins.score} proteins, NutritionQ5`);
    const { container, contentContainer, titleSection, iconContainerViewStyle,
            AmountSection, AddMinusSection, textSection,
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
          <Progress value={5 / 9} text={'5/9'} />
          </View>
          <View style={textSection}>
          <Text style={textStyle}>
          {'How many days a week do you eat foods rich in protein?'}
          {'\n'}
          </Text>
          <Text style={smallTextStyle}>
          {'Tip: It can be animal based like chicken, beef, eggs'}
          {', or plant based like nuts, beans, lentils and tofu.'}
          </Text>
          </View>

          <View style={AmountSection}>
          <Text style={{ fontSize: 120, color: 'white' }}>
          {(this.props.proteinWeek5 === 7) ? 'Daily' : this.props.proteinWeek5}
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
  return { proteinWeek5: state.nutrition.proteinWeek5,
          meatDay6: state.nutrition.meatDay6,
          nonMeatDay7: state.nutrition.nonMeatDay7,
          proteins: state.nutrition.proteins
  };
};

export default connect(mapStateToProps, { nutritionChanged })(NutritionQ5);
