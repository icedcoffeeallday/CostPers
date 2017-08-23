import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Card } from './common';

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    const { userId, itemId } = props;

    this.state = {
      userId: userId,
      itemId: itemId,
      itemName: '',
      uses: '',
      price: '',
      costPer: ''
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3000/users/' + this.state.userId + '/items/' + this.state.itemId)
    .then((response) => {
      this.setState(
        {
          itemName: response.data.name,
          uses: response.data.used_times,
          price: response.data.price,
          costPer: response.data.costper.costper
        }
      );
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <View>
        <Card>
          <Text>{this.state.itemName}</Text>
        </Card>

        <Card>
          <Text>{this.state.uses} uses</Text>
        </Card>

        <Card>
          <Text>Original price: ${this.state.price}</Text>
        </Card>

        <Card>
          <Text>Star</Text>
        </Card>

        <Card>
          <Text>Current cost per use: ${this.state.costPer}</Text>
        </Card>
      </View>
    );
  }
}

export default ItemDetails;
