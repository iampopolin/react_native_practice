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

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDate: {}
    };
  }

  showAddModal = () => {
    this.refs.addModal.open();
  };
  changeTextHandler = data => {
    const color = Math.floor(Math.random() * 16777215).toString(16); //自動色彩
    this.setState({
      newDate: {
        albumId: 1,
        id: FlatListData.length + 1,
        title: data,
        url: 'https://via.placeholder.com/600/' + color,
        thumbnailUrl: 'https://via.placeholder.com/150/' + color
      }
    });
  };
  submitFormHandler = () => {
    FlatListData.push(this.state.newDate); //暫時加到FlatListData 但是重新Load後又不見了
    this.props.parentFlatList.refreshFlatList();
    //this.refs.myFlatList.scrollToEnd(); //跑到最底端  *這邊不能用 因為ref為 myFlatList為 <FlatList的位置> 所以我將它複製到BasicFlatList*
    this.refs.addModal.close(); //addModal這項目關閉
  };
  render() {
    return (
      <Modal
        ref="addModal"
        position="center"
        style={{ height: 300, width: 300, borderRadius: 10 }}
      >
        <Text style={{ fontSize: 30, padding: 20, alignSelf: 'center' }}>
          添加數量
        </Text>
        <TextInput
          placeholder="請輸入標題"
          style={{
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            margin: 5,
            padding: 5
          }}
          onChangeText={this.changeTextHandler}
        />
        <Button
          style={{ backgroundColor: 'red', borderWidth: 0, margin: 5 }}
          textStyle={{ fontSize: 18, color: 'white' }}
          onPress={this.submitFormHandler}
        >
          提交
        </Button>
      </Modal>
    );
  }
}
