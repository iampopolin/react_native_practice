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

import FlatListItem from './../FlatListItem/index';
import AddModal from './../AddModal/index';
export default class BasicFlatList extends Component {
  state = {
    refresh: false
  };
  constructor(props) {
    super(props);
  }

  refreshFlatList = () => {
    this.setState({ refresh: !this.state.refresh });
    this.refs.myFlatList.scrollToEnd();
  };
  addFlatListData = () => {
    //Alert.alert('添加項目');
    //this.refs.addModal.open(); //由於 <Modal>無法自行開啟 需要靠open()
    this.refs.myAddModal.showAddModal(); //參考ref為myAddModal的showAddModal方法
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          //必須是flex:1 才可以依照FlatListData的值給出相應的空間
        }
        <View
          style={{
            height: 50,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 20
          }}
        >
          <View style={{ alignSelf: 'flex-end' }}>
            <TouchableOpacity onPress={this.addFlatListData}>
              <Icon name="plus-square" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          ref="myFlatList"
          data={FlatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            //item和index"參數"都是固定用法

            //console.log(`Item ${JSON.stringify(item)} , index : ${index}`);

            //這邊的item變數對應上面的props.item  * 這邊的parentFlatList是為了用這邊的function *
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
        <AddModal ref="myAddModal" parentFlatList={this} />
      </View>
    );
  }
}
