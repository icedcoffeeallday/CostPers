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
        <View>
          <Text
            style={styles.textStyle}
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

const styles = {
  textStyle: {
    color: '#0000FF',
    fontSize: 18
  }
  // container: {
  //   flex:1,
};


export { Item };
