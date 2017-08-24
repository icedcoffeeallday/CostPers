import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

class Star extends Component {
  constructor(props) {
    super(props);

    const { userId, itemId } = props;
    let star = this.props.star;

    this.state = {
      userId: userId,
      itemId: itemId,
      itemName: '',
      star: star
    };

    this.updateStar = this.updateStar.bind(this);
  }

  updateStar() {
    axios.patch('http://localhost:3000/users/' + this.state.userId + '/items/' + this.state.itemId, {
      star: this.state.star
    })
    .then((response) => {
      this.setState({ star: response.data.star });
      console.log(response);
    });
  }

  renderStar() {
    if (this.state.star === true) {
      return (<Text
              onPress={this.updateStar}
              >
              FULL STAR here
              </Text>);
    }
      return <Text onPress={this.updateStar}>empty star here</Text>;
  }

  render() {
    console.log('***********************');
    console.log(this.state.star);
    console.log(this.state.itemId);
    return (
      <View>
        {this.renderStar()}
      </View>
    );
  }
}

export default Star;
