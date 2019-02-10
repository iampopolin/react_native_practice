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

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDate: {},
      index: 0
    };
  }

  showEditModal = (item, index) => {
    //接收來自FlatListItem的item和index
    this,
      this.setState(
        {
          editDate: item,
          index
        },
        () => {
          this.refs.editModal.open();
        }
      );
  };
  changeTextHandler = data => {
    /*title:data 為你要在inputtext上修改的內容  this.state.editDate這邊包括了傳過來的item的id url title thumbnailUrl等 */
    var editDateObj = Object.assign({}, this.state.editDate, { title: data });
    this.setState({
      editDate: editDateObj
    });
  };
  submitFormHandler = () => {
    FlatListData[this.state.index] = this.state.editDate;
    this.props.parentFlatList.refreshFlatList();
    //this.refs.myFlatList.scrollToEnd(); //跑到最底端  *這邊不能用 因為ref為 myFlatList為 <FlatList的位置> 所以我將它複製到BasicFlatList*
    this.refs.editModal.close(); //addModal這項目關閉
  };
  render() {
    return (
      <Modal
        ref="editModal"
        position="center"
        style={{ height: 300, width: 300, borderRadius: 10 }}
      >
        <Text style={{ fontSize: 30, padding: 20, alignSelf: 'center' }}>
          修改數據
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
          value={this.state.editDate.title} //他固定了TextInput的固定value 因此需要onChangeText裡的{ title: data }項目
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
