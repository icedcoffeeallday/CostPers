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
       password: '',
       userId: '',
       loading: false
     };
     this.registerUser = this.registerUser.bind(this);
   }

   registerUser() {
     axios.post('http://localhost:3000/register', {
         first_name: this.state.firstName,
         last_name: this.state.lastName,
         email: this.state.email,
         password: this.state.password
     })
     .then((response) => {
       this.setState(
      { userId: response.data.user_id,
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        loading: false,
        auth: true
      });
    })
    .then(() => {
      Actions.login();
    })
   .catch(() => this.setState(
       { error: 'Login failed, please try again.',
        loading: false
     }
     ));
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

           <CardSection>
              <Text
                style={styles.loginStyle}
                onPress={() => Actions.login()}
              >
                Login
              </Text>
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
   loginStyle: {
     color: '#FFEBCD',
     marginTop: 30,
     marginBottom: 20,
     textAlign: 'center',
     textDecorationLine: 'underline',
     fontFamily: 'ArialHebrew-Bold',
   },
   errorTextStyle: {
     fontSize: 20,
     alignSelf: 'center',
     color: 'red'
   }
 };

 export default Register;
