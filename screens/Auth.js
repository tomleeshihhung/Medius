import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Auth extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  // AsyncStorage.removeItem('fb_token');
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }
onAuthComplete(props) {
  if (props.token) {
    this.props.navigation.navigate('Daily');
  } else {
    this.props.navigation.navigate('Welcome');
  }
}

  render() {
    return (
      <View style={{ backgroundColor: 'white' }} />
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(Auth);
