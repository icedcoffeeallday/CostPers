import React, { Component } from 'react';
import { Text, View, Input } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
  render() {
    return (
      <View>
      <Text onPress={() => Actions.login()} >
      Login
      </Text>
      <Text onPress={()=> Actions.addItem()}>
      Add ItemsList
      </Text>
      </View>

    );
  }
}

export default Main;
