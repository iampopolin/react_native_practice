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
//import ImagePicker from 'react-native-image-picker';
export default class App extends Component {
  state = {
    photo: null,
    test: 'test'
  };
  /*handleChoosePhoto = () => {
    console.log('1');
    const options = { noData: true };
    console.log('2');
    ImagePicker.launchImageLibrary(options, response => {
      console.log(response);
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  test = () => {
    console.log('this is test');
  };*/

  handlephoto = () => {
    console.log('handle......');
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropperCircleOverlay: true,
      cropping: true
    }).then(image => {
      this.setState({
        photo: image,
        test: image.path
      });
    });
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={styles.container}>
        {photo && <Text>{this.state.test}</Text>}
        {/**https://i.vimeocdn.com/portrait/58832_300x300.jpg */}
        <Text>Welcome to React Native!</Text>
        <Button title="find_Image2" onPress={this.handlephoto} />
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
