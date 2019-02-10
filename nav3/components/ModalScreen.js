import React from 'react';
import { View, Button, Text } from 'react-native';

export default (ModalScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这里模态框组件</Text>
      <Button
        onPress={() => props.navigation.navigate('Home')}
        title="到另一節點的主頁"
      />
    </View>
  );
});

ModalScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'MOdal'
  };
};
