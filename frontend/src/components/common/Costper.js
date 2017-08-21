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
      <View style={styles.container}>
        <Text>${this.state.costper}</Text>
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
