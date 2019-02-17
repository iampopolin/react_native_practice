import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import BasicFlatList from './BasicFlatList/index';
console.log('in hello1');
export default class App extends React.Component {
  render() {
    const drawer = this.props.navigation; //命名傳參
    return (
      <View style={styles.container}>
        {/**因為BasicFlatList本身沒有this.props.navigation */}
        <BasicFlatList Drawerparam={drawer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
