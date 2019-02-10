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

class FlatListItem extends Component {
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
export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = { newDate: {} };
  }

  refreshFlatList = () => {
    this.setState({});
  };
  addFlatListData = () => {
    //Alert.alert('添加項目');
    this.refs.addModal.open(); //由於 <Modal>無法自行開啟 需要靠open()
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
    this.refs.myFlatList.scrollToEnd(); //跑到最底端
    this.refs.addModal.close(); //addModal這項目關閉
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
      </View>
    );
  }
}
