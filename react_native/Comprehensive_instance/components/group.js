import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Group extends Component {
  handlerShares = () => {
    this.props.navigation.navigate('SharesScreen');
  };
  handle = () => {
    this.componentWillUnmount();
  };
  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      console.log('success didmount');
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Group</Text>
        <Button title="ToShare" onPress={this.handlerShares} />
      </View>
    );
  }
}
