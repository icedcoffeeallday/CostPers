import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View>{props.children}</View>
  );
};

export { CardSection };
