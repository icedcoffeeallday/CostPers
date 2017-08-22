import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const UseButton = ({onPress, children}) => {
  return(
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} >
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  )
};

export default UseButton;

const styles = ({
  buttonContainer: {
    width: 120,
    height: 20,
    backgroundColor: 'blue',
    alignItems: 'flex-end'
  }
});
