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
            text: 'rewrite',
            type: 'primary',
            onPress: () => {
              this.props.parentFlatList.refs.myEditModal.showEditModal(
                item,
                index
              );
            }
          },
          {
            text: 'delete',
            type: 'delete',
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
              backgroundColor: 'rgb(238, 190, 108)'
            }}
          >
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ width: 70, height: 70, margin: 5 }}
            />
            <View style={{ flex: 1, height: 70, flexDirection: 'column' }}>
              <Text style={styles.textBox}>item 項目</Text>
              <Text style={styles.textBox}>{item.title}</Text>
              <Text style={styles.textBox}>縣市</Text>
            </View>
            <View style={{ paddingTop: 30 }}>
              <Text>like</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: 'white' }} />
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  textBox: {
    color: 'white'
    //padding: 10
  }
});
