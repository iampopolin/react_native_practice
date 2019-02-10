import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
        <Button
          title="ToTest"
          onPress={() => this.props.navigation.navigate('testScreen')}
        />
      </View>
    );
  }
}
