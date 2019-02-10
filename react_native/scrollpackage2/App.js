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

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Basic />
        <BasicFlatList />
      </ScrollView>
    );
  }
}
