import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BasicFlatList from './components/BasicFlatList/index';
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
