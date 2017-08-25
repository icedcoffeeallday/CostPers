import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      name: '',
      price: '',
      star: '',
      data: [],
      error: ''
    };
    this.insertItem = this.insertItem.bind(this);
  }

  handleName = (text) => {
    this.setState({ name: text });
  }

  handlePrice = (text) => {
    this.setState({ price: text });
  }

  insertItem = () => {
    var thisItem = this;
    axios.post('https://sheltered-peak-36785.herokuapp.com/users/' + this.state.userId + '/items', {
      name: this.state.name,
      price: this.state.price,
    })
    .then(() => {
      Actions.itemsList({
        userId: this.state.userId
      });
    })
    .catch(() => this.setState(
        { error: 'Item not added.'
      }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.fieldLabelText}>Item name</Text>
        <TextInput
          label="Name"
          placeholder="bike"
          style={styles.input}
          placeholder="Example: Bike"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.handleName}
        />
        </View>

        <View>
        <Text style={styles.fieldLabelText}>Price</Text>
        <TextInput
          label="Price"
          placeholder="Example: $100"
          style={styles.input}
          placeholderTextColor="white"
          onChangeText={this.handlePrice}
        />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
        <Text
          style={styles.submitButtonText}
          onPress={() => this.insertItem()}
        >
          Add It!
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddItem;

const styles = StyleSheet.create({
   container: {
      paddingTop: 80,
      backgroundColor: '#16795b',
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'flex-start'
   },
   input: {
     height: 40,
     width: 300,
     backgroundColor: 'rgba(225,225,225,0.2)',
     marginBottom: 20,
     paddingHorizontal: 10,
     justifyContent: 'center',
     color: '#FFF'
   },
   submitButton: {
      backgroundColor: '#16795B',
      padding: 10,
      margin: 15,
      height: 40,
      width: 300
   },
   submitButtonText: {
     textAlign: 'center',
     color: '#FFFFFF',
     fontWeight: '500',
     justifyContent: 'center'
   },
   buttonContainer: {
     backgroundColor: '#0e513d',
     height: 40,
     width: 300,
     paddingVertical: 15,
     marginTop: 10
   },
   inputText: {
     color: '#FFF'
   },
   fieldLabelText: {
     color: '#FFF',
     fontSize: 20,
     paddingBottom: 7
   }
});
