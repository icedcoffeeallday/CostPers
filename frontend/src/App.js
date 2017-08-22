import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import axios from 'axios';
import GlobalFont from 'react-native-global-font';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';

import { Header, Footer, ItemsList, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import AddItem from './components/AddItem';
import MainNavBar from './components/MainNavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      userId: '',
      firstName: '',
      lastName: '',
      auth: false,
    };
    this.authentication = this.authentication.bind(this);
  }

  static renderRightButton(props) {
    return <Text>Right Button</Text>;
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

    Actions.itemsList(
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

      <Router
        NavBar={MainNavBar}
        sceneStyle={{ paddingTop: 65 }}
      >
        <Scene key="root">
          <Scene
          key="login"
          component={LoginForm}
          authentication={this.authentication}
          title="CostPers"
          initial
          />
        <Scene
           key="itemsList"
           title="CostPers"
           component={ItemsList}
           navigationBarStyle={styles.navBar}
           onRight={() => Actions.addItem()}
           rightButtonImage={source={uri: 'https://facebook.github.io/react/img/logo_og.png' }}
           rightTitle="Add Item"
           renderBackButton={()=>(null)}
            />
          {/* itemsList inital={loggedIn} <- boolean method to determine loggedin/authenication  */}
        <Scene key="addItem" component={AddItem} title="Add Item"/>
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
