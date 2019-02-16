import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from './styles';
import TextInput from './components/InputWithIcons/index';
import Button from 'apsl-react-native-button';
import firebase from '@firebase/app';

import '@firebase/database';

import '@firebase/auth';

import '@firebase/storage';
var config = {
  apiKey: 'AIzaSyDYdB2RzFWMYsalGIz57ECEka1Oc1WYaN8',
  authDomain: 'projectname2.firebaseapp.com',
  databaseURL: 'https://projectname2.firebaseio.com',
  projectId: 'projectname2',
  storageBucket: 'projectname2.appspot.com',
  messagingSenderId: '62256666226'
};
firebase.initializeApp(config);
export default class App extends React.Component {
  state = {
    UserName: '',
    Password: '',
    testText: 'test',
    verify: 'cannot'
  };

  handlerChangeUserName = text => {
    this.setState(prevState => ({
      UserName: text
    }));
  };

  handlerChangePassword = text => {
    this.setState(prevState => ({
      Password: text
    }));
  };

  handlerSubmit = () => {
    //console.log(this.state);

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.UserName, this.state.Password)
      .then(success => {
        console.log(success);
        this.setState({
          testText: 'success'
        });
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(success => {
            console.log(success);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          testText: 'failed'
        });
      });
  };
  
  Login_Verify = () => {
    
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.UserName, this.state.Password)
      .then(user => {
        this.setState({
          verify: 'login'
        });
      })
      //這邊emailVerified要用.then()放在Login後面 否則非同步會讓emailVerified的內容失效
      .then(() => {
        if (firebase.auth().currentUser.emailVerified) {
          this.setState({
            verify: 'success'
          });
        }
        console.log(firebase.auth().currentUser.uid);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoAndTitle}>
          <Image source={require('./img.png')} />
          <Text style={styles.logoAndTitleText}>React Native</Text>
        </View>
        <View style={styles.login}>
          <TextInput
            placeholder="请输入用户名"
            icon={{ name: 'user' }}
            keyboardType="email-address"
            onChangeText={this.handlerChangeUserName}
          />
          <TextInput
            placeholder="请输入密码"
            icon={{ name: 'lock' }}
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={this.handlerChangePassword}
          />
          <Button
            style={{ backgroundColor: '#e74c3c', borderWidth: 0, margin: 10 }}
            textStyle={{ fontSize: 18, color: 'white' }}
            onPress={this.handlerSubmit}
          >
            登录
          </Button>
          <Text>{this.state.testText}</Text>
          <Text>{this.state.verify}</Text>

          <Button
            style={{ backgroundColor: '#e74c3c', borderWidth: 0, margin: 10 }}
            textStyle={{ fontSize: 18, color: 'white' }}
            onPress={this.Login_Verify}
          >
            登入並驗證
          </Button>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>2019</Text>
        </View>
      </View>
    );
  }
}
