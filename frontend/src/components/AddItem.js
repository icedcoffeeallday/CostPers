import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class AddItem extends Component {
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
        />
        <TextInput
          label="Price"
          placeholder="Example: $100"
          style = {styles.input}
               placeholderTextColor = "#6A6B5F"
        />
        <TouchableOpacity
          style = {styles.submitButton}>
        <Text style = {styles.submitButtonText}> Add Item! </Text>
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
