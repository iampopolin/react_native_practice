import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import { horizontalFlatListData } from './../../mockData/HorizontalFlatListData';
import HorizontalFlatListItem from './../HorizontalFlatListItem/index';
export default class HorizaontalFlatList extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: Platform.os === 'ios' ? 20 : 0
        }}
      >
        <View
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <Image
            source={require('./weather.jpg')}
            style={{
              flex: 1,
              flexDirection: 'column',
              width: null,
              height: null
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            backgroundColor: 'transparent',
            margin: 10
          }}
        >
          天氣預報
        </Text>
        <View style={{ height: 150 }}>
          <FlatList
            style={{ backgroundColor: 'black', opacity: 0.5 }}
            horizontal={true}
            data={horizontalFlatListData}
            renderItem={({ item, index }) => {
              return <HorizontalFlatListItem item={item} index={index} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
