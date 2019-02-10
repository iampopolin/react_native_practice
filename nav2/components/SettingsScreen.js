import React from 'react';
import { Text, View } from 'react-native';

export default (SettingsScreen = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettingsScreen</Text>
    </View>
  );
});

SettingsScreen.navigationOptions = {
  title: '设置',
  headerStyle: {
    //有效}
    backgroundColor: 'pink'
  }
};
