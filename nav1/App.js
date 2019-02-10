import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import SettingsScreen from './components/SettingsScreen';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
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
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'pink'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
