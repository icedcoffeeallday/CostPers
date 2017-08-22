import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import UseButton from './UseButton';
import axios from 'axios';

class Costper extends Component {
  constructor(props) {
    super(props)

    this.state = { costper: this.props.costper }
  }

addUse(arg) {
  var myCostper = this
  var url = "http://localhost:3000/items/"+arg+"/uses"
  console.log(url)
    axios.post("http://localhost:3000/items/"+arg+"/uses", {
      item_id: arg
    })
    .then(function(response) {
      console.log(response.data)
      myCostper.setState({costper: response.data })
    })
    .catch(function(response) {
      console.log("broken")
      console.log(arg)
      console.log(response)
    })

  }

  render() {

    return (
      <View>
        <View style={styles.costperContainer}>
          <Text style={styles.costText}>${this.state.costper} per use</Text>
          <UseButton onPress={() => this.addUse(this.props.item_id)} />
        </View>
      </View>
    );
  }
}

const styles = ({
  costText: {
    fontSize: 16,
    justifyContent: 'center',
    color: '#16795B'
  },
  costperContainer: {
    padding: 20,
    flexDirection: 'row'
  }
});

export default Costper;
