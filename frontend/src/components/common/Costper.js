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

    this.state = { costper: this.props.costper}
    // this.addUse = this.addUse.bind(this)
  }

addUse(arg) {
  var myCostper = this
    axios.post("https://radiant-mesa-97290.herokuapp.com/items/"+arg+"/uses", {
      item_id: arg
    })
    .then(function(response) {
      myCostper.setState({costper: response.data})
      myCostper.props.updateItem(response.data)
    })
    .catch(function(response) {
      console.log("broken")
    })
  }


  render() {
    return (
      <View>
        <View style={styles.costperContainer}>
          <View style={styles.allText}>
            <Text style={styles.costText}>${this.state.costper}</Text>
            <Text style={styles.perUseText}> per use</Text>
          </View>
          <View style={styles.buttonPlacement}>
            <UseButton
            onPress={() => this.addUse(this.props.item_id)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = ({
  allText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  costText: {
    fontSize: 20,
    color: '#16795B'
  },
  perUseText: {
    color: '#808080',
    fontSize: 16
  },
  buttonPlacement: {
    flexDirection: 'row',
    height: 40
  },
  costperContainer: {
    paddingBottom: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});

export default Costper;
