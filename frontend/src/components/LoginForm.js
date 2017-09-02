import React, { Component } from 'react';
import { AsyncStorage, Text, View, Linking, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, InputField, Spinner, ItemsList, Header } from './common';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    this.props.authentication(this.state.email, this.state.password);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.loginUser}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../images/whitelogotransparent.png')}
          />
          <Text style={styles.title}>Understand the value of your things</Text>

          <Card>
          <CardSection>
          <InputField
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          </CardSection>

          <CardSection>
          <InputField
            placeholder="Password"
            returnKeyType="go"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>
          </Card>

        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#16795b'
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingTop: 120
  },
  logo: {
    width: 200,
    height: 150
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
