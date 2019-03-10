import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Group extends Component {
  handlerShares = () => {
    this.props.navigation.navigate('SharesScreen');
  };
  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      console.log('success didmount');
    });
  }

  render() {
    return (
      <View>
        <Button title="ToShare" onPress={this.handlerShares} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: (screenHeight / 5) * 3,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start', //換下一行時在最左邊增加
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: screenWidth / 5,
    margin: screenWidth / 40,
    alignItems: 'center' //讓字居中
  },
  imagestyle: {
    width: screenWidth / 6,
    height: screenWidth / 6,
    borderRadius: 30
  },
  tick: {}
});
