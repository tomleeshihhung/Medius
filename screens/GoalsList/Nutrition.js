import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import GoalsStyles from './GoalsStyles';
import GoalsListItem from './GoalsListItem';
import { goalsChanged } from './Nutrition/Vegetables/goalsActions';

class Nutrition extends Component {
  onPress = (item) => {
    this.props.goalsChanged({ prop: 'title', value: item.title });
    this.props.goalsChanged({ prop: 'status', value: item.status });
    this.props.parentNavigation.navigate('NewGoal', { title: item.title, status: item.status });
  }
  flatListItemSeparator = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#F0F0F0',
          marginLeft: 0,
          marginRight: 0
        }}
      />
    );
  }

  render() {
    const { vegetables, fruits, proteins, dairy, water, dairyQ } = this.props;
    const data = [
      { title: 'Vegetables',
        subTitle: '3 benefits',
        subSubTitle: '1 friend',
        status: vegetables,
       },
      { title: 'Fruits',
        subTitle: '2 benefits',
        subSubTitle: '2 friends',
        status: fruits,
      },
      { title: 'Dairy',
        subTitle: '4 benefits',
        subSubTitle: 'Be the first',
        status: dairy,
      },
      { title: 'Protein',
        subTitle: '3 benefits',
        subSubTitle: '3 friends',
        status: proteins,
      },
      { title: 'Water',
        subTitle: '2 benefits',
        subSubTitle: 'Be the first',
        status: water,
      }
    ];

    const noDairyData = [
      { title: 'Vegetables',
        subTitle: '3 benefits',
        subSubTitle: '1 friend',
        status: vegetables,
       },
      { title: 'Fruits',
        subTitle: '2 benefits',
        subSubTitle: '2 friends',
        status: fruits,
      },
      { title: 'Protein',
        subTitle: '3 benefits',
        subSubTitle: '3 friends',
        status: proteins,
      },
      { title: 'Water',
        subTitle: '2 benefits',
        subSubTitle: 'Be the first',
        status: water,
      }
    ];
    const checkData = () => {
      if (dairyQ === 'none') {
        return data;
      }
      return noDairyData;
    };
    const renderItem = (list) => {
       return <GoalsListItem data={list.item} onPress={() => this.onPress(list.item)} />;
    };
    return (
      <View style={container}>
          <FlatList
              data={checkData()}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={this.flatListItemSeparator}
              scrollEnabled
              showsVerticalScrollIndicator={false}
          />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    parentNavigation: state.goals.parentNavigation,
    water: state.nutrition.water.status,
    proteins: state.nutrition.proteins.status,
    vegetables: state.nutrition.vegetables.status,
    fruits: state.nutrition.fruits.status,
    dairy: state.nutrition.dairy.status,
    dairyQ: state.nutrition.dairyQ
  };
};

const { container } = GoalsStyles;

export default connect(mapStateToProps, { goalsChanged })(Nutrition);
