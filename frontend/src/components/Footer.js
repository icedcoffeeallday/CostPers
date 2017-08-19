import React from 'react';
import { Text, View } from 'react-native';

const Footer = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>CostPers</Text>
    </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // elevation: 2,
    position: 'relative'
  },
    textStyle: {
      fontSize: 20,
      color: '#00241B'
    }
};

export default Footer;
