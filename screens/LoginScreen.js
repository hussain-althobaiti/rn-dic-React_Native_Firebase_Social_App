import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
  ImageBackground,
} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: '',
    password: '',
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      <View style={styles.container}>    
      
     <ImageBackground
          source={require('../assets/BG.png')}
          style={{ height:'100%' , width:'100%' }}>

        <StatusBar barStyle='light-content'></StatusBar>
    
        <Image
          source={require('../assets/loginLogo-Copy.png')}
          style={{ marginTop: 100, alignSelf: 'center',width:300,height:100 }}
        ></Image>
        
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}> {this.state.errorMessage} </Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize='none'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'center', marginTop: 32 }}
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        >
          <Text style={{ color: '#414959', fontSize: 13 }}>
            New to SocialApp?{' '}
            <Text style={{ fontWeight: '500', color: '#E9446A' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 80,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161f3d'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  }
});
