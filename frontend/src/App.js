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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Footer, ItemsList, Spinner, TabIcon } from './components/common';
import AddItem from './components/AddItem';
import LoginForm from './components/LoginForm';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';
import MainNavBar from './components/MainNavBar';
import Main from './components/Main';


class App extends Component {

  state = { loggedIn: null };

  static renderRightButton(props) {
    return <Text>Right Button</Text>;
  }

  componentWillMount() {
     let renogare = 'Renogare';
     GlobalFont.applyGlobal(renogare);

    //  firebase.initializeApp({
    //    apiKey: 'AIzaSyCNqlXMbg2il8Rq-vSeHYWONM32EaYQyGc',
    //    authDomain: 'costpers-50fd6.firebaseapp.com',
    //    databaseURL: 'https://costpers-50fd6.firebaseio.com',
    //    projectId: 'costpers-50fd6',
    //    storageBucket: 'costpers-50fd6.appspot.com',
    //    messagingSenderId: '121755312308'
    // });
    //
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }

  render() {
    return (
      <Router
        NavBar={MainNavBar}
        sceneStyle={{ paddingTop: 65 }}
      >
        <Scene key="root">
          <Scene key="login" component={LoginForm} title="CostPers" />
          <Scene
            key="itemsList"
            component={ItemsList}
            navigationBarStyle={styles.navBar}
            onRight={() => console.log('hi')}
            rightButtonIconStyle={{ width: 30, height: 30 }}
            iconName="add"
            initial
          />
          {/* itemsList inital={loggedIn} <- boolean method to determine loggedin/authenication  */}
          <Scene key="main" component={Main} title="test" />
          <Scene key="addItem" component={AddItem} title="Add An Item" />
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
