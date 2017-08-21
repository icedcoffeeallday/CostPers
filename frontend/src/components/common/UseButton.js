import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const UseButton = ({onPress, children}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>Click me!</Text>
    </TouchableOpacity>
  )
};

export default UseButton;

const styles =({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
});
