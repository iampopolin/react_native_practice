import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LIKE_BasicFlatList from './LIKE/LIKE_BasicFlatList';
export default class Like extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LIKE_BasicFlatList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
