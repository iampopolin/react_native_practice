import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
};
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default () => (
  <View style={{ height: screenHeight / 3, width: screenWidth }}>
    <Swiper style={styles.wrapper} showsButtons>
      <View style={styles.slide1}>
        <Image
          source={require('./slime00.jpg')}
          style={{ width: screenWidth, height: (screenWidth * 576) / 1024 }}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          source={require('./slime01.jpg')}
          style={{ width: screenWidth, height: (screenWidth * 900) / 1600 }}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          source={require('./slime02.png')}
          style={{ width: screenWidth, height: (screenWidth * 600) / 900 }}
        />
      </View>
    </Swiper>
  </View>
);
