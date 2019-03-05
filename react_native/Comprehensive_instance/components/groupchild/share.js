import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Share extends Component {
  handlerPrivates = () => {
    this.props.navigation.navigate('PrivatesScreen');
  };
  componentDidMount() {
    console.log('share didmount');
  }
  componentWillUnmount() {
    console.log('share unmount');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Share</Text>
        <Button title="ToPrivate" onPress={this.handlerPrivates} />
      </View>
    );
  }
}
