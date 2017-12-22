//import { Constants } from 'expo';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { nutritionChanged } from './nutritionActions';
import { OneButton,
  Progress, BackButton, HeaderSection } from '../../../components';
import nutritionStyles from './nutritionStyles';
//import { calculate } from './nutritionHelper';


class DairyQ extends Component {
  state= { selected: false, button1: false, button2: false, button3: false };
  onClick = () => {
    this.props.navigation.navigate('NutritionQ9');
  }
  onClick1 = () => {
    if (this.state.button1) {
      this.setState({ button1: false, selected: false });
      this.props.nutritionChanged({ prop: 'dairyQ', value: 'none' });
    }
    if (!this.state.button1 && !this.state.selected) {
      this.setState({ button1: true, selected: true });
      this.props.nutritionChanged({ prop: 'dairyQ', value: 'medical' });
    }
  }
  onClick2 = () => {
    if (this.state.button2) {
      this.setState({ button2: false, selected: false });
      this.props.nutritionChanged({ prop: 'dairyQ', value: 'none' });
    }
    if (!this.state.button2 && !this.state.selected) {
      this.setState({ button2: true, selected: true });
      this.props.nutritionChanged({ prop: 'dairyQ', value: 'personal' });
    }
  }
  onClick3 = () => {
    if (this.state.button3) {
      this.setState({ button3: false, selected: false });
      this.props.nutritionChanged({ prop: 'dairyQ', value: 'none' });
    }
    if (!this.state.button3 && !this.state.selected) {
      this.setState({ button3: true, selected: true });
      this.props.nutritionChanged({ prop: 'dairyQ', value: 'none' });
    }
  }
  render() {
    console.log(`${this.props.dairyWeek8} dairyWeek8,
      ${this.props.dairy.score} dairy, NutritionQ8`);
    const { container, contentContainer, titleSection,
     buttonAmountSection, buttonTextSection,
     lastSection, textStyle } = nutritionStyles;
    const { dispatch } = this.props.navigation;
    const backAction = NavigationActions.back({
  key: null
});
    return (
      <View style={container}>
      <HeaderSection
      left={<BackButton onPress={() => dispatch(backAction)} />}
      />
        <View style={contentContainer}>

          <View style={titleSection}>
          <Progress value={8 / 9} text={'8/9'} />
                </View>
                <View style={buttonTextSection}>
                <Text style={textStyle}>
                {'Do you not eat dairy products for medical or personal reasons?'}
                </Text>
                </View>

          <View style={buttonAmountSection}>
          <OneButton
          title={"Yes: I'm lactose intolerant"}
          onPress={this.onClick1}
          select={this.state.button1}
          />
          <View style={{ height: 5, width: '100%' }} />
          <OneButton
          title={'Yes: personal reasons'}
          onPress={this.onClick2}
          select={this.state.button2}
          />
          <View style={{ height: 5, width: '100%' }} />
          <OneButton
          title={"No: I'd like to eat more"}
          onPress={this.onClick3}
          select={this.state.button3}
          />

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

export default connect(mapStateToProps, { nutritionChanged })(DairyQ);
