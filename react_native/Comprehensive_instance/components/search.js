import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

import BasicFlatList from './BasicFlatList/index';

export default class Search extends Component {
  render() {
    //這裡是靜態(會一直在畫面上) 不能用scrollView
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
Search.navigationOptions = {
  title: 'Server',
  headerTitleStyle: {
    flex: 1,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  headerTintColor: '#6666FF'
};
