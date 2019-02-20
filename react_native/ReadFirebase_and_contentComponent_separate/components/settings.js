import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from '@firebase/app';

import '@firebase/database';

import '@firebase/auth';

import '@firebase/storage';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'hello'
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid + '/user_image')
      .on('value', snapshot => {
        console.log(snapshot.val());
        //window.image_path = snapshot.val();
        this.setState({ loading: snapshot.val() });
      });
  }
  onButtonPress = () => {
    firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid + '/user_image')
      .set(
        'https://cdn.unwire.hk/wp-content/uploads/2014/10/facebook-user.jpg'
      );
  };
  onButtonPress2 = () => {
    firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid + '/user_image')
      .set(
        'https://www.penghu-nsa.gov.tw/FileDownload/Album/Big/20161012162551758864338.jpg'
      );
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings {this.state.loading}</Text>
        <Button title="改成人頭" onPress={this.onButtonPress} />
        <Button title="改成橋圖" onPress={this.onButtonPress2} />
      </View>
    );
  }
}
