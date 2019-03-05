import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Private extends Component {
  handlerGroups = () => {
    this.props.navigation.navigate('GroupsScreen');
  };
  componentDidMount() {
    console.log('Private didmount');
  }
  componentWillUnmount() {
    console.log('Private unmount');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Private</Text>
        <Button title="ToGroup" onPress={this.handlerGroups} />
      </View>
    );
  }
}
