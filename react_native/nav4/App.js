import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Feed from './components/feed';
import test from './components/test';
import Profile from './components/profile';
import Hello from './components/hello';
import Settings from './components/settings';
import {
  createDrawerNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  DrawerItems
} from 'react-navigation';

import { Container, Content, Header, Body } from 'native-base';

export default class App extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}
const devicewidth = Dimensions.get('window').width;
const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/mario.png')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const Homestack = createStackNavigator(
  {
    FeedScreen: Feed,
    testScreen: test
  },
  {
    initialRouteName: 'FeedScreen'
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Homestack,
      /*navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          return <Icon name={'home'} size={25} />;
        }
      })*/
      navigationOptions: {
        title: '首頁'
      }
    },
    Setting: {
      screen: Settings
      /* navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          return <Icon name={'cog'} size={25} />;
        }
      })*/
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName;
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Setting') {
          iconName = `cog`;
        }
        return (
          <Icon
            name={iconName}
            size={25}
            color={focused ? '#48a87c' : 'gray'}
          />
        );
      }
    })
  }
  /*{
    tabBarOptions: {
      //沒作用
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }*/
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    HE: {
      screen: Hello
    },
    Set: {
      screen: Settings
    },
    TabNav: TabNavigator
  },
  {
    initialRouteName: 'HE',
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: devicewidth / 2
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerImage: {
    height: 150,
    width: 160
  },
  drawerLinkIcons: {
    height: 24,
    width: 24
  },
  drawerHeader: {
    height: 170,
    backgroundColor: 'white'
  }
});
