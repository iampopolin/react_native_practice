import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from './styles';
import TextInput from './components/InputWithIcons/index';
import Button from 'apsl-react-native-button';

export default class App extends React.Component {
  state = {
    UserName: '',
    Password: ''
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
    console.log(this.state);
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
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>2019</Text>
        </View>
      </View>
    );
  }
}
