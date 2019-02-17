import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import TextInput from './components/InputWithIcons/index';
import Button from 'apsl-react-native-button';
console.log('in Login');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
      testText: 0
    };
  }

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
    console.log('test');
    this.setState({
      testText: this.state.testText + 1
    });
    this.props.navigation.navigate('drawer');
  };
  handlerRegister = () => {
    console.log('register');
    this.setState({
      testText: this.state.testText + 1
    });
    this.props.navigation.navigate('register');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoAndTitle}>
          <Image
            source={require('./img.png')}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 3
            }}
          />
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
            onPress={
              this.handlerSubmit
              //this.props.navigation.navigate('drawer');
            } //轉到Drawer
          >
            登录
          </Button>
          <Button
            style={{ backgroundColor: '#e74c3c', borderWidth: 0, margin: 10 }}
            textStyle={{ fontSize: 18, color: 'white' }}
            onPress={this.handlerRegister}
          >
            註冊
          </Button>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>{this.state.testText}</Text>
        </View>
      </View>
    );
  }
}
