import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class HorizontalFlatListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          width: 120,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray',
          margin: 5
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Alert.alert(item.hour);
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            margin: 20
          }}
        >
          {item.hour}
        </Text>

        <Icon
          name={Platform.OS === 'ios' ? item.status.ios : item.status.android}
          size={30}
          color="white"
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          {item.degrees} ℃
        </Text>
      </View>
    );
  }
}
