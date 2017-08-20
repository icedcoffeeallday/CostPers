/* @flow weak */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const container = (props) => (
  <View style={styles.container}>
    { props.children }
  </View>
);

export default container;

const styles =({
  container: {
    flex:1
  },
});
