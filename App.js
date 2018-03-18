/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Header from'./src/components/Header';
import LoginForm from './src/components/LoginForm';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    firebase.initalizeApp({
    apiKey: 'AIzaSyAZMlJ75fZhoAc5equA_Xy9F3CpXGvzRF8',
    authDomain: 'fir-reactnative-f1135.firebaseapp.com',
    databaseURL: 'https://fir-reactnative-f1135.firebaseio.com',
    projectId: 'fir-reactnative-f1135',
    storageBucket: 'fir-reactnative-f1135.appspot.com',
    messagingSenderId: '706768661193'
  });
  }
  render() {
    return (
      <View>
        <Header headerText={'Giriş Yap'}/>
        <LoginForm  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
