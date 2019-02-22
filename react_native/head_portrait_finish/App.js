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
import Login from './components/LoginTest/Login';
import Register from './components/LoginTest/Register';

import {
  createDrawerNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  DrawerItems
} from 'react-navigation';

import { Container, Content, Header, Body } from 'native-base';

import firebase from '@firebase/app';

import '@firebase/database';

import '@firebase/auth';

import '@firebase/storage';
import { database } from 'firebase';
var config = {
  apiKey: 'AIzaSyDYdB2RzFWMYsalGIz57ECEka1Oc1WYaN8',
  authDomain: 'projectname2.firebaseapp.com',
  databaseURL: 'https://projectname2.firebaseio.com',
  projectId: 'projectname2',
  storageBucket: 'projectname2.appspot.com',
  messagingSenderId: '62256666226'
};
firebase.initializeApp(config);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    const devicewidth = Dimensions.get('window').width;
    console.log('Hello');

    const Homestack = createStackNavigator(
      {
        FeedScreen: Feed,
        testScreen: test
      },
      {
        initialRouteName: 'FeedScreen',
        navigationOptions: {
          headerStyle: {
            backgroundColor: 'pink'
          }
        }
      }
    );
    const TabNavigator = createBottomTabNavigator(
      {
        Home: {
          screen: Homestack,
          navigationOptions: {
            title: '首頁'
          }
        },
        Setting: {
          screen: Settings
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
    );

    const TabNavigator_convert = createStackNavigator(
      {
        TabNavigator: TabNavigator
      },
      {
        headerMode: 'none'
      }
    );
    const hello = createStackNavigator({
      screen: Hello
    });
    const AppDrawerNavigator = createDrawerNavigator(
      {
        HE: hello,
        Set: {
          screen: Settings
        },
        TabNav: TabNavigator_convert
      },
      {
        initialRouteName: 'HE',
        contentComponent: props => <DrawerMenu property={props} />,
        drawerWidth: devicewidth / 2
      }
    );

    const LoginToDrawer = createStackNavigator(
      {
        login: {
          screen: Login
        },
        drawer: {
          screen: AppDrawerNavigator
        },
        register: {
          screen: Register
        }
      },
      {
        initialRouteName: 'login',
        headerMode: 'none'
      }
    );

    return <LoginToDrawer />;
  }
}
console.log('in test5');
/////////////////////////////////
class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_path: null };
  }

  componentDidMount() {
    if (window.firstlogin) {
      firebase
        .database()
        .ref('users/' + firebase.auth().currentUser.uid + '/user_image')
        .on('value', snapshot => {
          console.log(snapshot.val());
          //window.image_path = snapshot.val();
          this.setState({ user_path: snapshot.val() });
        });
    }
  }

  render() {
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body>
            {this.state.user_path && (
              <Image
                style={styles.drawerImage}
                source={{
                  uri: this.state.user_path
                }}
              />
            )}
          </Body>
        </Header>
        <Content>
          <DrawerItems {...this.props.property} />
        </Content>
      </Container>
    );
  }
}

/////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerImage: {
    height: 160,
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
