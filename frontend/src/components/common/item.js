import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';

class Item extends Component {
  constructor(props) {
    super(props);

    const { user_id, item_id } = props;
    
    this.state = {
      userId: user_id,
      itemId: item_id
    };
  }

  render() {
    return (
        <View style={styles.itemNameContainer}
        >
          <Text
            style={styles.itemNameDisplay}
            onPress={() =>
                Actions.itemDetails(
                  { userId: this.state.userId,
                    itemId: this.state.itemId }
                  )}
          >
            {this.props.name}
          </Text>
        </View>
    );
  }
}

const styles = ({
  itemNameDisplay: {
    minHeight: 80,
    width: 250,
    fontSize: 28,
    justifyContent: 'center',
    color: '#16795B'
  },
  itemNameContainer: {
    padding: 20
  }
});

export { Item };