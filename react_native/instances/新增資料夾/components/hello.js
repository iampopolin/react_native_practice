import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import BasicFlatList from './BasicFlatList/index';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BasicFlatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
