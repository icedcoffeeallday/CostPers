import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import UseButton from './UseButton';
import axios from 'axios';

class Costper extends Component {

addUse(arg) {
  var url = "http://localhost:3000/items/"+arg+"/uses"
  console.log(url)
    axios.post("http://localhost:3000/items/"+arg+"/uses", {
      item_id: arg
    })
    .then(function(response) {
      console.log(response)
      console.log("working")
    })
    .catch(function(response) {
      console.log("broken")
      console.log(arg)
      console.log(response)
    })

  }

  render() {

    return (
      <View style={styles.container}>
        <Text>${this.props.costper}</Text>
        <UseButton onPress={() => this.addUse(this.props.item_id)} />
      </View>
    );
  }
}

const styles = ({
  container: {
    height: 50,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
});

export default Costper;
