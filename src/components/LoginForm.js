import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';
import firebase from 'firebase';
import Button from'./src/components/Button';
import Card from'./src/components/Card';
import CardSection from'./src/components/CardSection';
class  LoginForm extends Component {
  state ={email:'', password:''};
  clicklogin(){
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.loginSucces.bind(this))
    .catch(() =>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.loginSucces.bind(this))
      .catch(this.loginFail.bind(this));
    });
  }
  loginSucces() {
    console.log('başarılı');
    this.setState({ loading: false });
  }

  loginFail() {
    console.log('Hatalı');
  }

  render() {
    const {subContainerStyle,inputStyle } = styles;
    return(
      <Card>
        <CardSection>
          <TextInput
            placeholder="Email"
            style={inputStyle}
            value={this.state.email}
            onChangeText=(email => this.setState({email}))
          />
        </CardSection>

        <CardSection>
        <TextInput
          placeholder="Password"
          style={inputStyle}
          value={this.state.password}
          onChangeText=(password => this.setState({password}))
        />
        </CardSection>

        <CardSection>
            <Button onPress={this.clicklogin.bind(this)}>Giriş Yap</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
   inputStyle:{
     color: '#000',
     paddingRight: 5,
     paddingLeft: 5,
     fontSize: 10,
     lineHeight: 23,
     flex:2
   },
};




export default LoginForm;
