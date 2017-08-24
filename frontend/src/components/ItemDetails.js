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
        <Card>
          <Text style={styles.itemNameText}>{this.state.itemName}</Text>
        </Card>
        </View>

        <View style={styles.timesUsedContainer}>
          <Card>
            <Text style={styles.timesUsedText}>Times used: </Text>
            <Text style={styles.timesUsedValue}>{this.state.uses}</Text>
          </Card>
        </View>

        <View style={styles.priceContainer}>
          <Card>
            <Text style={styles.priceText}>Price: </Text><Text style={styles.priceValue}>$ {this.state.price}</Text>
          </Card>
        </View>

        <View style={styles.currentCostperContainer}>
          <Card>
            <Text style={styles.currentCostperText}>Current</Text>
            <Text style={styles.costperWord}> costper </Text> 
            <Text style={styles.currentCostperText}>use: </Text> 
            <Text style={styles.currentCostperValue}> ${this.state.costPer}</Text>
          </Card>
        </View>

        <View style={styles.starContainer}>
            <Card>
              <Icon 
              name="star-border"
              size={50}
              style={{color: 'white'}}
              />
              <Text style={styles.starText}>Star this item</Text>
            </Card>
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
    backgroundColor: 'red',
    fontSize: 55,
    marginTop: 60,
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
    flexWrap: 'wrap',
    marginTop: 30,
    backgroundColor: 'orange',
    width: 300,
    height: 70
  },
  timesUsedText: {
    color: 'black',
    fontSize: 24,
    width: 200,
    height: 50,
    backgroundColor: 'yellow'
  },
  timesUsedValue: {
    color: '#16795B',
    fontSize: 32,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width: 200,
    height: 50
  },
  priceText: {
    color: 'black',
    fontSize: 24,
    width: 100,
    backgroundColor: 'blue'
  },
  priceValue: {
    color: '#16795B',
    width: 60,
    fontSize: 24, 
    backgroundColor: 'purple'
  },
  currentCostperContainer: {
    flexDirection: 'row',
    marginTop: 30,
    fontSize: 20,
    backgroundColor: 'blue'
  },
  currentCostperText: {
    fontSize: 20
  },
  costperWord: {
    fontSize: 20,
    color: '#16795B'
  },
  currentCostperValue: {
    fontSize: 44,
    color: '#16795B'
  },
  starContainer: {
    marginTop: 30,
    backgroundColor: 'rgb(255, 202, 58)'
  },
  starText: {
    color: 'white',
    borderRadius: 5
  }
})

export default ItemDetails;
