import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ModalScreen from './components/ModalScreen';
import ModalScreen1 from './components/ModalScreen1';
import SettingScreen from './components/SettingsScreen';
export default class App extends React.Component {
  render() {
    return <MainStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Details: {
      screen: DetailsScreen
    },
    Home: {
      screen: HomeScreen
    },
    Setting: {
      screen: SettingScreen
    }
  },

  {
    initialRouteName: 'Home'
  }
);
const Moddd = createStackNavigator({
  MyModal: {
    screen: ModalScreen
  },
  MyModal1: {
    screen: ModalScreen1
  }
});
const MainStack = createStackNavigator(
  {
    Main: {
      screen: RootStack
    },
    Children: {
      screen: Moddd
    }
    //這裡Children為分支 因為在ModalScreen 或 ModalScreen1的為首頁 而沒辦法goback() 因此需要navigate('Home')路由到Home底下
    //而這裡也發現ModalScreen1 的goback是轉到 ModalScreen 原因是createStackNavigator的註冊順序
  },

  {
    mode: 'modal',
    headerMode: 'none'
    /*headerMode: 'none'把這一層的所有標題都去除掉，包刮 RootStack 的navigationOptions的title資訊 ，
        但是RootStack里各個底下的HomeScreen.navigationOptions，SettingsScreen.navigationOption，
        DetailScreen.navigationOptions仍然有效果*/
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
