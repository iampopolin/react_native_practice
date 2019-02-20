import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class hello extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
hello.navigationOptions = {
  title: 'Hello1',
  headerTitleStyle: {
    flex: 1,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  headerTintColor: '#6666FF'
};
