import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Costper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{2+3}</Text>
      </View>
    );
  }
}

const styles = ({
  container: {
    height: 20
  },
});

export default Costper;
