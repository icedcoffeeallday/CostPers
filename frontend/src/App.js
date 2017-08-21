import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import firebase from 'firebase';
import GlobalFont from 'react-native-global-font';
import { Header, Footer, ItemsList, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';
import AddItem from './components/AddItem';
import MainNavBar from './components/MainNavBar';


class App extends Component {

  state = { loggedIn: null };

  static renderRightButton(props) {
    return <Text>Right Button</Text>;
  }

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
      <Router
        NavBar={MainNavBar}
        sceneStyle={{ paddingTop: 65 }}
        onRight={() => console.log('hi')}
        rightButtonImage={source={uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        rightTitle="Add Item"
      >
        <Scene key="root">
          <Scene key="login" component={LoginForm} title="CostPers" />
          <Scene
            key="itemslist"
            component={ItemsList}
            navigationBarStyle={styles.navBar}

            initial />
          {/* itemsList inital={loggedIn} <- boolean method to determine loggedin/authenication  */}
        </Scene>
      </Router>
    );
  }
}

const styles = {
  navBar: {
    backgroundColor: '#F0F0F0'
  },
  image: {
    width: 50,
    height: 50
  }
}

export default App;
