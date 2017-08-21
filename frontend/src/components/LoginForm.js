import React, { Component } from 'react';
import { AsyncStorage, Text, Linking } from 'react-native';
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
      <Card>
        <CardSection>
          <InputField   //referred to as a controlled component.
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <InputField
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry  //can omit setting value for boolean attributes/props; default == true
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
