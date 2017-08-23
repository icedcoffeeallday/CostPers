import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UseButton = ({onPress, toggle, children}) => {

  const buttonToggleColor = toggle?'purple':'gray';

  return(
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
        onPress={onPress}
         >
          <View>
            <Icon 
            name="check-circle" 
            size={40} 
            style={{color: buttonToggleColor}} 
          />
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default UseButton;

const styles = ({
  buttonContainer: {
    width: 75,
    height: 20,
    alignItems: 'flex-end'
  }
});

