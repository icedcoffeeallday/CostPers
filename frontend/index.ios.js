import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GlobalFont from 'react-native-global-font'
import { Header, Footer } from './src/components/common';

export default class frontend extends Component {

  componentWillMount() {
     let renogare = 'Renogare'
     GlobalFont.applyGlobal(renogare)
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Text>App body</Text>
        <Footer />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('frontend', () => frontend);
