import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';

export default class HorizontalScrollView extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
      >
        <View
          style={{
            backgroundColor: '#e5e5e5',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth
          }}
        >
          <Text>屏幕11</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth
          }}
        >
          <Text>屏幕2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth
          }}
        >
          <Text>屏幕3</Text>
        </View>
      </ScrollView>
    );
  }
}
