import React from 'react';
import {
  View,
  Text
} from 'react-native';

const ContainerSection = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

export default ContainerSection;

const styles = ({
  container: {
    flex: 1,
  },
});
