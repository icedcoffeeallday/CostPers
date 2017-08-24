import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Card } from './common';
import Icon from 'react-native-vector-icons/MaterialIcons' ;

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
  };

  // const toggleStar=toggle?"star":"star-border";

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.itemNameContainer}>
          <Text style={styles.itemNameText}>{this.state.itemName}</Text>
        </View>

        <View style={styles.timesUsedContainer}>
            <Text style={styles.timesUsedText}>Times used: </Text>
            <Text style={styles.timesUsedValue}>{this.state.uses}</Text>
        </View>

        <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price: </Text><Text style={styles.priceValue}>${this.state.price}</Text>
        </View>

        <View style={styles.currentCostperContainer}>
            <Text style={styles.currentCostperText}>Current</Text>
            <Text style={styles.costperWord}> costper </Text> 
            <Text style={styles.currentCostperText}>use: </Text> 
            <Text style={styles.currentCostperValue}> ${this.state.costPer}</Text>
        </View>

        <View style={styles.starContainer}>
              <Icon 
              name="star-border"
              size={25}
              style={{color: 'white'}}
              />
              <Text style={styles.starText}>Star this item</Text>
        </View>

      </View>
    );
  }
}

const styles= ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemNameContainer: {
    justifyContent: 'center'
  },
  itemNameText: {
    fontSize: 55,
    marginTop: 80,
    marginRight: 15,
    marginLeft: 15,
    height: 70,
    width: 250,
    color: '#16795B',
    textAlign: 'center',
  },
  timesUsedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginTop: 30,
    justifyContent: 'center',
    width: 300,
    height: 70
  },
  timesUsedText: {
    color: 'black',
    fontSize: 24,
    width: 170,
    height: 50,
    textAlign: 'center',
  },
  timesUsedValue: {
    color: '#16795B',
    fontSize: 32,
    width: 50,
    height: 50,
    textAlign: 'center'
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    width: 200,
    height: 50
  },
  priceText: {
    color: 'black',
    fontSize: 24,
    width: 85,
    textAlign: 'center'
  },
  priceValue: {
    color: '#16795B',
    width: 60,
    fontSize: 24, 
    textAlign: 'center'
  },
  currentCostperContainer: {
    flexDirection: 'row',
    marginTop: 10,
    fontSize: 20,
    backgroundColor: 'blue'
  },
  currentCostperText: {
    textAlign: 'center',
    fontSize: 20
  },
  costperWord: {
    textAlign: 'center',
    fontSize: 20,
    color: '#16795B'
  },
  currentCostperValue: {
    textAlign: 'center',
    fontSize: 44,
    color: '#16795B'
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: 'rgb(255, 202, 58)'
  },
  starText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    borderRadius: 5
  }
})

export default ItemDetails;
