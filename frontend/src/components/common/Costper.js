import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import UseButton from './UseButton'

class Costper extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>${this.props.costper}</Text>
        <UseButton />
      </View>
    );
  }
}

const styles = ({
  container: {
    height: 50,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
});

export default Costper;
