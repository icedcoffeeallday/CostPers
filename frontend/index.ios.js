import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import GlobalFont from 'react-native-global-font';
import { Header, Footer, ItemsList, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class CostPers extends Component {
  state = { loggedIn: null };

  componentWillMount() {
     let renogare = 'Renogare';
     GlobalFont.applyGlobal(renogare);

     firebase.initializeApp({
       apiKey: 'AIzaSyCNqlXMbg2il8Rq-vSeHYWONM32EaYQyGc',
       authDomain: 'costpers-50fd6.firebaseapp.com',
       databaseURL: 'https://costpers-50fd6.firebaseio.com',
       projectId: 'costpers-50fd6',
       storageBucket: 'costpers-50fd6.appspot.com',
       messagingSenderId: '121755312308'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
          <ItemsList />
          <Footer />
        </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size='large' style={styles.spinnerStyle} />
          </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        {this.renderContent()}
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

AppRegistry.registerComponent('frontend', () => CostPers);
