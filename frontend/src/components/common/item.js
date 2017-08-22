import React, { Component } from 'react';
import { View,Text } from 'react-native';



class Item extends Component {
  render(){
    return(
      <View style={styles.itemNameContainer}>
        <Text style={styles.itemNameDisplay}>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = ({
  itemNameDisplay: {
    fontSize: 32,
    justifyContent: 'center',
    color: '#16795B'
  },
  itemNameContainer: {
    padding: 20
  }
});


export { Item };
