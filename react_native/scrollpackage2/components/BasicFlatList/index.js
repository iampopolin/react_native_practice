import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import FlatListData from './../../mockData/FlatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <Swipeout
        autoClose={true}
        right={[
          {
            text: 'delete',
            type: 'primary',
            onPress: () => {
              FlatListData.splice(index, 1); //只能delete
              this.props.parentFlatList.refreshFlatList();
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
    this.state = {};
  }

  refreshFlatList = () => {
    this.setState({});
  };
  render() {
    return (
      <FlatList
        data={FlatListData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          //item和index"參數"都是固定用法

          //console.log(`Item ${JSON.stringify(item)} , index : ${index}`);

          //這邊的item變數對應上面的props.item
          return (
            <FlatListItem item={item} index={index} parentFlatList={this} />
          );
        }}
      />
    );
  }
}
