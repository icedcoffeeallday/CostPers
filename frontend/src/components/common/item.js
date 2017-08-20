/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const MyComponent = ({}) => (
  <View style={styles.container}>
    <Text>I'm MyComponent</Text>
  </View>
);

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
