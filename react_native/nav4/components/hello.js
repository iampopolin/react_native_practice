import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Hello extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello</Text>
      </View>
    );
  }
}
