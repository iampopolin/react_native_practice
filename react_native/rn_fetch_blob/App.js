/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';

import firebase from '@firebase/app';

import '@firebase/database';

import '@firebase/auth';

import '@firebase/storage';
////////////////////////////////////////////  消除討厭setting timer黃字
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
//////////////////////////////////////////////

var config = {
  apiKey: 'AIzaSyDYdB2RzFWMYsalGIz57ECEka1Oc1WYaN8',
  authDomain: 'projectname2.firebaseapp.com',
  databaseURL: 'https://projectname2.firebaseio.com',
  projectId: 'projectname2',
  storageBucket: 'projectname2.appspot.com',
  messagingSenderId: '62256666226'
};
firebase.initializeApp(config);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dp: null,
      photo: null
    };
  }

  openPicker = () => {
    this.setState({
      loading: true
    });
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;

    const uid = '12345';
    console.log('handle......');
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropperCircleOverlay: true,
      cropping: true
    }).then(image => {
      this.setState({
        /**先不用管 */
        photo: image
      });

      let uploadBlob = null;
      const imagePath = image.path;
      const imageRef = firebase
        .storage()
        .ref(uid)
        .child('db.jpg');
      let mime = 'image/jpg';
      fs.readFile(imagePath, 'base64')
        .then(data => {
          //console.log(Blob.build);

          return Blob.build(data, { type: `${mime};BASE64` })
            .then(blob => {
              uploadBlob = blob;
              return imageRef.put(blob, { contentType: mime });
            })
            .then(() => {
              uploadBlob.close();
              return imageRef.getDownloadURL();
            })
            .then(url => {
              let userData = {};
              this.setState({
                loading: false,
                dp: url
              });
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={styles.container}>
        {/**https://i.vimeocdn.com/portrait/58832_300x300.jpg */}
        <Text>{this.state.dp}</Text>
        <Text>Welcome to React Native!</Text>
        <Button title="find_Image3" onPress={this.openPicker} />
        {photo && (
          <Image
            source={{
              uri: photo.path
            }}
            style={{ width: 100, height: 100 }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    width: 100,
    height: 100
  }
});
