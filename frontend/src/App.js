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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Footer, ItemsList, Spinner, TabIcon } from './components/common';
import AddItem from './components/AddItem';
import LoginForm from './components/LoginForm';
import { Scene, Router, Actions, NavBar } from 'react-native-router-flux';
import MainNavBar from './components/MainNavBar';
import ItemDetails from './components/ItemDetails';

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
      itemId: '',
      auth: false,
      data: []
    };
    this.authentication = this.authentication.bind(this);
    // this.addNewItem = this.addNewItem.bind(this);
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

  // addNewItem(item) {
  //   var items = this.state.data;
  //   items.push(item);
  //   this.setState({ data: items });
  // }

  render() {

    return (
      <Router
        sceneStyle={{ paddingTop: 65 }}
      >
        <Scene key="root">
          <Scene
          key="login"
          component={LoginForm}
          authentication={this.authentication}
          title="CostPers"
          hideNavBar={true}
          sceneStyle={{ paddingTop: 21 }}
          initial
          />

        <Scene
           key="itemsList"
           title="CostPers"
           component={ItemsList}
           navigationBarStyle={styles.navBar}
           renderBackButton={()=>(null)}
           hideNavBar={false}
           titleStyle={styles.navBarTextStyle}
        />

        <Scene
            key="addItem"
            component={AddItem}
            title="Add Item"
            hideNavBar={false}
            titleStyle={styles.navBarTextStyle}
            leftButtonIconStyle={styles.navBarIconStyle}
        />

        <Scene
            key="itemDetails"
            component={ItemDetails}
            title="Item Details"
            hideNavBar={false}
            titleStyle={styles.navBarTextStyle}
            leftButtonIconStyle={styles.navBarIconStyle}
            onBack={() => Actions.itemsList(
            { userId: this.state.userId, star: this.state.star })}
        />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  navBar: {
    backgroundColor: '#F0F0F0',
  },
  image: {
    width: 50,
    height: 50
  },
  navBarTextStyle: {
    color: '#16795b',
    fontSize: 23
  },
  navBarIconStyle: {
    tintColor: '#16795b',
  }
};

export default App;
