import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';
import FlatListData from './../../mockData/FlatListData';
import { getAllFlatListData } from '../../services/FlatListDataService';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import Button from 'apsl-react-native-button';

import FlatListItem from './../FlatListItem/index';
import AddModal from './../AddModal/index';
import EditModal from './../EditModal/index';

export default class BasicFlatList extends Component {
  state = {
    refresh: false,
    flatListDataFromServer: []
  };

  refreshDataFromServer = () => {
    this.setState({
      refresh: true
    });
    getAllFlatListData()
      .then(data => {
        this.setState({
          flatListDataFromServer: data,
          refresh: false
        });
      })
      .catch(error => {
        this.setState({
          flatListDataFromServer: [],
          refresh: false
        });
      });
  };

  componentDidMount() {
    this.refreshDataFromServer();
  }

  forceUpdateHandler = () => {
    this.forceUpdate();
  };
  refreshFlatList = () => {
    this.setState({
      refresh: !this.state.refresh
    });
  };
  addFlatListData = () => {
    // Alert.alert('添加数据操作');
    // this.refs.addModal.open();
    this.refs.myAddModal.showAddModal();
  };

  render() {
    const { Drawerparam } = this.props; //接收hello.js 來的參數
    return (
      <View style={{ flex: 1 }}>
        {/**上面去除marginTop:20 */}
        <View
          style={{
            height: 50,
            backgroundColor: '#111',
            //alignItems: 'center',
            justifyContent: 'center'
            //paddingRight: 20
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Icon
              style={{ paddingLeft: 7 }}
              name="bars"
              size={30}
              color="#fff"
              onPress={() => {
                Drawerparam.openDrawer(); //相當於this.props.navigation.openDrawer()
              }}
            />

            <TouchableOpacity onPress={this.addFlatListData}>
              <Icon name="plus-circle" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          ref="flatlist"
          extraData={this.state.refresh}
          data={this.state.flatListDataFromServer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            //   console.log(`Item:${JSON.stringify(item)},Index:${index}`);
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
        <AddModal ref="myAddModal" parentFlatList={this} />
        <EditModal ref="myEditModal" parentFlatList={this} />
      </View>
    );
  }
}
