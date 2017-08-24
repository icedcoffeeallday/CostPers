import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Card } from './common';
import Star from './Star';

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    const { userId, itemId, star } = props;

    this.state = {
      userId: userId,
      itemId: itemId,
      itemName: '',
      uses: '',
      price: '',
      costPer: '',
      star: ''
    };
  }

  componentWillMount() {
    axios.get('https://sheltered-peak-36785.herokuapp.com/users/' + this.state.userId + '/items/' + this.state.itemId)
    .then((response) => {
      this.setState(
        {
          itemName: response.data.name,
          uses: response.data.used_times,
          price: response.data.price,
          costPer: response.data.costper.costper,
          star: response.data.star
        }
      );
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.star);
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
          <Star
            userId={this.state.userId}
            itemId={this.state.itemId}
            star={this.state.star}
          />
        </Card>

        <Card>
          <Text>Current cost per use: ${this.state.costPer}</Text>
        </Card>
      </View>
    );
  }
}

export default ItemDetails;
