import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import GlobalFont from 'react-native-global-font';
import { Header, Footer, ItemsList, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { Scene, Router, Actions } from 'react-native-router-flux';


class App extends Component {

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

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="root">
        <Scene key="login" component={LoginForm} title="CostPers"/>
        <Scene key="itemslist" component={ItemsList} title="CostPers" initial/>
        </Scene>
      </Router>
    );
  }
}

export default App;
