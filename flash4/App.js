/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import Basic from './components/Basic/';

import BasicFlatList from './components/BasicFlatList/index';
import HorizontalFlatList from './components/HorizontalFlatList/index';

export default class App extends Component {
  render() {
    //這裡是靜態(會一直在畫面上) 不能用scrollView
    return (
      <View style={styles.container}>
        <HorizontalFlatList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
