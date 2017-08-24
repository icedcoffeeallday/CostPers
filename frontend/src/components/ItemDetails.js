import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Card } from './common';
import Star from './Star';
import Icon from 'react-native-vector-icons/MaterialIcons' ;

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
    axios.get('http://localhost:3000/users/' + this.state.userId + '/items/' + this.state.itemId)
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
  };

  // const toggleStar=toggle?"star":"star-border";

  render() {
    console.log(this.state.star);
    return (
      <View style={styles.container}>

        <View style={styles.itemNameContainer}>
          <Text style={styles.itemNameText}>{this.state.itemName}</Text>
        </View>

        <View style={styles.timesUsedContainer}>
            <Text style={styles.timesUsedText}>Uses: </Text>
            <Text style={styles.timesUsedValue}>{this.state.uses}</Text>
        </View>

        <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price: </Text><Text style={styles.priceValue}>${this.state.price}</Text>
        </View>

        <View style={styles.bigCostperContainer}>
          <View style={styles.currentCostperContainer}>
              <Text style={styles.costperWord}>Costper</Text>
              <Text style={styles.currentCostperText}>use: </Text>
          </View>
          <View style={styles.costperMoneyContainer}>
            <Text style={styles.costperDollarSign}> $</Text>
            <Text style={styles.currentCostperValue}>{this.state.costPer}</Text>
          </View>
        </View>

        <View style={styles.starContainer}>
              <Icon
              name="star-border"
              size={25}
              style={{color: 'white'}}
              />
              <Text style={styles.starText}> Star this item</Text>
        </View>

        <Card>
          <Star
            userId={this.state.userId}
            itemId={this.state.itemId}
            star={this.state.star}
          />
        </Card>

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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 200,
    width: 300,
  },
  itemNameText: {
    adjustsFontSizeToFit: true,
    fontSize: 50,
    marginTop: 50,
    marginRight: 15,
    marginLeft: 15,
    width: 290,
    color: '#16795B',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  timesUsedContainer: {
    flexDirection: 'row',
    marginTop: 40,
    width: 320,
    height: 40
  },
  timesUsedText: {
    color: 'black',
    fontSize: 24,
    width: 150,
    height: 40,
    textAlign: 'right',
    marginRight: 10
  },
  timesUsedValue: {
    color: '#16795B',
    fontSize: 32,
    width: 150,
    height: 40,
    textAlign: 'left',
    marginLeft: 10
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 40,
    marginBottom: 30
  },
  priceText: {
    color: 'black',
    fontSize: 24,
    width: 150,
    textAlign: 'right',
    marginRight: 10
  },
  priceValue: {
    color: '#16795B',
    width: 150,
    marginLeft: 10,
    fontSize: 32,
    textAlign: 'left',
  },
  bigCostperContainer: {
    height: 100,
  },
  currentCostperContainer: {
    flexDirection: 'row',
    fontSize: 24,
    height: 30,
  },
  currentCostperText: {
    textAlign: 'center',
    fontSize: 24
  },
  costperWord: {
    textAlign: 'center',
    fontSize: 24,
    marginRight: 4,
    marginLeft: 5,
    color: '#16795B'
  },
  costperMoneyContainer: {
    flexDirection: 'row'
  },
  costperDollarSign: {
    fontSize: 40,
    color: '#2f4f4f',
    marginTop: 1
  },
  currentCostperValue: {
    textAlign: 'center',
    fontSize: 60,
    color: '#2f4f4f',
    marginTop: 1,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    width: 200,
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

export default ItemDetails;
