import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle, color } = styles;

  return (
    <View style={styles.input}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#D3D3D3"
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
};

const styles = {
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    justifyContent: 'center'
  }
};

export { InputField };
