/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  PixelRatio,
  Image,
  Dimensions,
  TextInput,
  Button
} from 'react-native';

export default class VerticalScrollView extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width;
    var list = [];
    for (let i = 0; i < 50; i++) {
      list.push(
        <View
          key={i}
          style={{
            flexDirection: 'row',
            padding: 30,
            borderWidth: 1 / PixelRatio.get(),
            backgroundColor: '#e5e5e5',
            borderColor: '#ccc'
          }}
        >
          <Text>List : {i}</Text>
        </View>
      );
    }
    return (
      <ScrollView
        ref={scroll => (this._scroll = scroll)}
        maximumZoomScale={3}
        minimumZoomScale={0.5}
        keyboardDismissMode="on-drag"
      >
        <Button
          title="To end"
          onPress={() => {
            this._scroll.scrollToEnd();
          }}
        />
        <Image
          source={require('./../../bridge.jpg')}
          style={{ width: screenWidth, height: (screenWidth * 683) / 1024 }}
        />
        <TextInput
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
        />
        {list}
        <Button
          title="To start"
          onPress={() => {
            this._scroll.scrollTo({ y: 0 });
          }}
        />
      </ScrollView>
    );
  }
}
