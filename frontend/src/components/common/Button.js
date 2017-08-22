import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        {children} 
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    backgroundColor: '#0e513d',
    height: 40,
    width: 300,
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
    justifyContent: 'center'
  }
};

export { Button };
