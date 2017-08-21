import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import GlobalFont from 'react-native-global-font';
import { Header, Footer, ItemsList, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { Router, Actions, Scene } from 'react-native-router-flux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      userId: 'hi',
      firstName: '',
      lastName: '',
      auth: false,
    };
    this.authentication = this.authentication.bind(this);
    // this.onButtonPress = this.onButtonPress.bind(this);
}

  componentWillMount() {
     let renogare = 'Renogare';
     GlobalFont.applyGlobal(renogare);
  }

  authentication(email, password) {

    axios.post('http://localhost:3000/login', {
        email: email,
        password: password
    })
    .then((response) => {
       this.setState(
      { userId: response.data.user_id,
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        loading: false,
        auth: true
      });

      Actions.itemslist(
        { userId: this.state.userId
        }
      );
    })
    .catch(() => this.setState(
        { error: 'Login failed, please try again.',
         loading: false
      }
      ));
  }

  render() {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log(this.state.userId);
    console.log(this.state.firstName);
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          authentication={this.authentication}
          title="CostPers"
          initial />
        <Scene key="itemslist"
          component={ItemsList}
          title="CostPers"
         />
        </Scene>
      </Router>
    );
  }
}

export default App;
