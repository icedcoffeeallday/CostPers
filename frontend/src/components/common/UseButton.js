import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UseButton = ({onPress, children}) => {
  return(
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        onPress={onPress}
         >
          <View style={styles.checkCircleIcon}>
            <Icon 
            name="check-circle" 
            size={40} 
            style={{color: 'gray', reverseColor: 'white'}} 
          />
          </View>
      </TouchableOpacity>
    </View>
  )
};

export default UseButton;

const styles = ({
  checkCircleIcon: {
  },
  buttonContainer: {
    width: 75,
    height: 20,
    alignItems: 'flex-end'
  }
});

