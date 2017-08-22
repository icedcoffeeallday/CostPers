import React, { Component } from 'react';
import { View,Text } from 'react-native';



class Item extends Component {
  render(){
    return(
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = ({
  // container: {
  //   flex:1,
});


export default Item;
