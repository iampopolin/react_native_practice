import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
export default class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
  }
  writeAddress = text => {
    this.setState(prevState => ({
      address: text
    }));
  };
  handlerGroups = () => {
    this.props.navigation.navigate('GroupsScreen');
  };
  componentDidMount() {
    const { navigation } = this.props;
    const already_get = navigation.getParam('paramName', []);
    console.log('get : ' + already_get);
    console.log('Private didmount');
  }
  componentWillUnmount() {
    console.log('Private unmount');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{ color: 'rgb(233, 178, 60)', fontSize: screenWidth / 30 }}
        >
          Address
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5
          }}
        >
          <Text
            style={{
              width: screenWidth / 9,
              fontSize: screenWidth / 25
            }}
          >
            地點 :
          </Text>
          <TextInput
            placeholder="請輸入"
            keyboardType="default"
            onChangeText={this.writeAddress}
            style={{
              flex: 1,
              padding: 0, //讓字可以貼齊border框
              margin: 5,
              borderWidth: 0.4,
              fontSize: screenWidth / 20
            }}
          />
        </View>

        {/**Start */}

        <Text
          style={{ color: 'rgb(233, 178, 60)', fontSize: screenWidth / 30 }}
        >
          Start
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'rgb(209,224,224)',
            margin: 10,
            borderBottomWidth: 1
          }}
        >
          <Text
            style={{
              width: screenWidth / 9,
              fontSize: screenWidth / 25
            }}
          >
            日期 :
          </Text>
          <TextInput
            placeholder="請輸入"
            keyboardType="default"
            onChangeText={this.writeAddress}
            style={{
              flex: 1,
              padding: 0, //讓字可以貼齊border框
              margin: 5,
              borderWidth: 0.4,
              fontSize: screenWidth / 20
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'rgb(209,224,224)',
            margin: 10,
            borderBottomWidth: 1
          }}
        >
          <Text
            style={{
              width: screenWidth / 9,
              fontSize: screenWidth / 25
            }}
          >
            時間 :
          </Text>
          <TextInput
            placeholder="請輸入"
            keyboardType="default"
            onChangeText={this.writeAddress}
            style={{
              flex: 1,
              padding: 0, //讓字可以貼齊border框
              margin: 5,
              borderWidth: 0.4,
              fontSize: screenWidth / 20
            }}
          />
        </View>

        {/**End */}

        <Text
          style={{ color: 'rgb(233, 178, 60)', fontSize: screenWidth / 30 }}
        >
          End
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'rgb(209,224,224)',
            margin: 10,
            borderBottomWidth: 1
          }}
        >
          <Text
            style={{
              width: screenWidth / 9,
              fontSize: screenWidth / 25
            }}
          >
            日期 :
          </Text>
          <TextInput
            placeholder="請輸入"
            keyboardType="default"
            onChangeText={this.writeAddress}
            style={{
              flex: 1,
              padding: 0, //讓字可以貼齊border框
              margin: 5,
              borderWidth: 0.4,
              fontSize: screenWidth / 20
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'rgb(209,224,224)',
            margin: 10,
            borderBottomWidth: 1
          }}
        >
          <Text
            style={{
              width: screenWidth / 9,
              fontSize: screenWidth / 25
            }}
          >
            時間 :
          </Text>
          <TextInput
            placeholder="請輸入"
            keyboardType="default"
            onChangeText={this.writeAddress}
            style={{
              flex: 1,
              padding: 0, //讓字可以貼齊border框
              margin: 5,
              borderWidth: 0.4,
              fontSize: screenWidth / 20
            }}
          />
        </View>

        <Button title="ToGroup" onPress={this.handlerGroups} />
      </View>
    );
  }
}
Private.navigationOptions = {
  title: '填寫資料',
  headerTitleStyle: {
    flex: 1,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  headerStyle: {
    backgroundColor: 'rgb(151, 180, 255)'
  },
  headerTintColor: 'black'
};
