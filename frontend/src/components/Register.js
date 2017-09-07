import React, { Component } from 'react';
import { AsyncStorage, Text, View, Linking, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, InputField, Spinner, ItemsList, Header } from './common';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser() {
    axios.post('https://sheltered-peak-36785.herokuapp.com/register', {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password
    })
    .then((response) => { console.log(response); });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.registerUser}>
        Register
      </Button>
    );
  }

  render() {
    console.log('**********************')
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.password);
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
            placeholder="First Name"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            label="First Name"
            value={this.state.firstName}
            onChangeText={firstName => this.setState({ firstName })}
          />
          </CardSection>

          <CardSection>
          <InputField
            placeholder="Last Name"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            label="Last Name"
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
          />
          </CardSection>

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
    paddingTop: 60
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

export default Register;
