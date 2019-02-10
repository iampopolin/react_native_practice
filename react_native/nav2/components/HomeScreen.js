import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentWillMount() {
    this.props.navigation.setParams({ _increaseCount: this.increaseCount });
  }

  render() {
    const paramsObjects = { id: 1, otherParams: 'other params' };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        <Text>Count:{this.state.count}</Text>
        <Button
          title="跳转至Details"
          onPress={() =>
            this.props.navigation.navigate('Details', paramsObjects)
          }
        />
        <Button title="Count++" onPress={this.increaseCount} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = ({ navigation }) => {
  const params = navigation.state.params || {};
  console.log(params);
  return {
    title: '首页',
    headerTitle: (
      <View>
        <Text>自定义组件</Text>
      </View>
    ),
    headerLeft: <Icon name="arrow-left" size={30} color="#000" />,
    headerRight: (
      <Icon
        name="plus"
        size={30}
        color="#000"
        onPress={params._increaseCount}
      />
    ),
    headerStyle: {
      backgroundColor: 'yellow'
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
};
