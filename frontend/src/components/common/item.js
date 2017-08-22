import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';


class Item extends Component {
  render() {
    return (

        <View>
          <Text style={styles.textStyle} onPress={() => Actions.addItem()}>{this.props.name}</Text>
        </View>

    );
  }
}

const styles = {
  textStyle: {
    color: '#0000FF',
    fontSize: 18
  }
  // container: {
  //   flex:1,
};


export { Item };
