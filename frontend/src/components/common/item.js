import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';

class Item extends Component {
  
  constructor(props) {
    super(props);

    const { user_id, item_id } = props;
    const itemName = this;
    
    this.state = {
      userId: user_id,
      itemId: item_id
    };
  }

  detailPress = (() => { 
      Actions.itemDetails(
      { userId: this.state.userId,
        itemId: this.state.itemId })
  })

  render() {
    return (
        <View style={styles.itemNameContainer}>
          <Text
            style={styles.itemNameDisplay}
            >
            {this.props.name}
          </Text>
        </View>
    );
  }
}

const styles = ({
  itemNameDisplay: {
    fontSize: 32,
    justifyContent: 'center',
    color: '#16795B',
    height: 50,
    width: 150,
    backgroundColor: 'yellow'
  },
  itemNameContainer: {
    padding: 20
  }
});

export { Item };
