import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationBar, NavBar } from 'react-native-router-flux';

class MainNavBar extends Component {
  render(){
    return (
      <NavBar
        title="title"
      />
    );
  }
}

export default MainNavBar;
