import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AddItem extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => Actions.pop()}>Hello world!</Text>
      </View>
    );
  }
}

export default AddItem;
