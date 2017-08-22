import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class LoginFormFields extends Component {
  render() {
    return (
      <View style={styles.container>
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {

  }
});
