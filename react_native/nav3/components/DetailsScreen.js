import React from 'react';
import { View, Text, Button } from 'react-native';

export default (DetailScreen = props => {
  const { params } = props.navigation.state;
  const id = params ? params.id : null;
  const otherParams = params ? params.otherParams : null;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailScreen Screen</Text>
      <Text>Id:{JSON.stringify(id)}</Text>
      <Text>OtherParams:{JSON.stringify(otherParams)}</Text>
      <Button
        title="跳转至Setting"
        onPress={() => props.navigation.navigate('Setting')}
      />
      <Button title="返回前一页" onPress={() => props.navigation.goBack()} />
      <Button
        title="修改标题内容"
        onPress={() =>
          props.navigation.setParams({ otherParams: '修改后的标题内容' })
        }
      />
    </View>
  );
});

DetailScreen.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;

  return {
    title: params ? params.otherParams : '这是一个嵌套的路由'
  };
};
