import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons' ;

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
    axios.patch('https://radiant-mesa-97290.herokuapp.com/users/' + this.state.userId + '/items/' + this.state.itemId, {
      star: this.state.star
    })
    .then((response) => {
      this.setState({ star: response.data.star });
      console.log(response);
    });
  }

  renderStar() {
    if (this.state.star === true) {
      return (
            <View 
              style={styles.starContainer}>
              <Icon
                name="star"
                size={25}
                style={{color: 'white'}}
              />
              <Text 
                style={styles.starText}
                onPress={this.updateStar}
                > 
                Remove favorite</Text>
            </View>
            );
    }
      return (
        <View 
              style={styles.starContainerOff}>
              <Icon
                name="star-border"
                size={25}
                style={{color: 'white'}}
              />
              <Text 
                style={styles.starText}
                onPress={this.updateStar}> 
                Favorite this item </Text>
            </View>
        );
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

const styles = ({
  starContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  starContainerOff: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 202, 58)'
  },
  starText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    borderRadius: 5
  }
})

export default Star;
