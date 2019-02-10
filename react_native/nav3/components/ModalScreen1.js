import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default (ModalScreen1 = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这里模态框组件1</Text>
      <Button onPress={() => props.navigation.goBack()} title="返回" />
    </View>
  );
});
