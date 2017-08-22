import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class AddItem extends Component {
  state = {
    name: '',
    price: ''
  }

  handleName = (text) => {
    this.setState({ name: text})
  }

  handlePrice = (text) => {
    this.setState({ price: text })
  }

  insertItem = (name, price) => {
    alert ('name: ' + name + ' price: $' + price)
  }

  render() {
    return (
      <View>
        <TextInput
          label="Name"
          placeholder="bike"
          style = {styles.input}
               placeholder = "Example: Bike"
               placeholderTextColor = "#6A6B5F"
               autoCapitalize = "none"
          onChangeText = {this.handleName}
        />
        <TextInput
          label="Price"
          placeholder="Example: $100"
          style = {styles.input}
               placeholderTextColor = "#6A6B5F"
          onChangeText = {this.handlePrice}
        />
        <TouchableOpacity
          style = {styles.submitButton}>
        <Text style = {styles.submitButtonText}
              onPress = {
                () =>this.insertItem(this.state.name, this.state.price)
              }
        >
        Add It! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddItem;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#16795B',
      borderWidth: 1,
      padding: 10
   },
   submitButton: {
      backgroundColor: '#16795B',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
})
