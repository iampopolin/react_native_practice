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
import Swipeout from 'react-native-swipeout';
import { deleteFlatListData } from '../../services/FlatListDataService';

export default class FlatListItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <Swipeout
        autoClose={true}
        right={[
          {
            text: '修改',
            type: 'primary',
            onPress: () => {
              this.props.parentFlatList.refs.myEditModal.showEditModal(
                item,
                index
              );
            }
          },
          {
            text: '删除',
            type: 'delete',
            onPress: () => {
              // console.log(index);
              // FlatListData.splice(index, 1);
              // this.props.parentFlatList.refreshFlatList();

              deleteFlatListData(item).then(data => {
                if (data.status === 200) {
                  this.props.parentFlatList.refreshDataFromServer();
                }
              });
            }
          }
        ]}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'green'
            }}
          >
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
            <View style={{ flex: 1, flexDirection: 'column', height: 100 }}>
              <Text style={styles.textBox}>{item.id}</Text>
              <Text style={styles.textBox}>{item.title}</Text>
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
    color: 'white',
    padding: 10
  }
});
