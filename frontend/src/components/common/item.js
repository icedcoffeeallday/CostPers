import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Costper from './Costper';
import UseButton from './UseButton';

class Item extends Component {
  render(){
    return(
      <View style={styles.container}>

        <Text>{this.props.name}</Text>
        <View style={styles.costperStyle}><Costper /></View>
        <UseButton />
      </View>
    )
  }
}

const styles = ({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  costperStyle: {
    alignItems: 'flex-end'
  }
});


export default Item;
