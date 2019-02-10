import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import FlatListData from './../../mockData/FlatListData';
import Swipeout from 'react-native-swipeout';

import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import Button from 'apsl-react-native-button';

export default class FlatListItem extends Component {
  render() {
    const { item, index } = this.props; //接收來自BasicFlatList的 item 和 index
    return (
      <Swipeout
        autoClose={true /**按下任何一個按鈕後 自動歸位(關閉)回正常位置 */}
        right={[
          {
            text: 'delete',
            type: 'primary',
            onPress: () => {
              FlatListData.splice(index, 1);
              this.props.parentFlatList.refreshFlatList(); //強制用render
            }
          }
        ]}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row', //包含這裡的flexDirection (上下) 共3個 是在排區塊的顯示排列
              backgroundColor: 'green'
            }}
          >
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
            <View style={{ height: 100, flexDirection: 'column' }}>
              <Text style={styles.textBox}>{item.id}</Text>
              <Text style={styles.textBox}>{item.title}</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: 'whrite' }} />
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  textBox: {
    color: 'white',
    padding: 10
  }
});
