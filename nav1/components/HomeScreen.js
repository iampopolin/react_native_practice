import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (HomeScreen = props => {
  const paramsObjects = { id: 1, otherParams: 'other params' };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button
        title="跳转至Details"
        onPress={() => props.navigation.navigate('Details', paramsObjects)}
      />
    </View>
  );
});

HomeScreen.navigationOptions = {
  title: '首页',
  headerTitle: (
    <View>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>自定义组件</Text>
    </View>
  ),
  headerStyle: {
    //有效}
    backgroundColor: 'yellow'
  },
  headerTintColor: 'red', //無效
  headerTitleStyle: {
    //無效
    fontWeight: 'bold'
  }
};
