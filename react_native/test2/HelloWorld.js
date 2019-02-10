import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import { styles } from './styles';
import APSLButton from 'apsl-react-native-button';
export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0
    };
    this.baseState = this.state;
  }
  //     initState() {
  //       return {
  //         count: 0
  //       };
  //     }
  //   state = this.initState();
  changeCount = () => {
    this.setState(preState => ({
      count: preState.count + 1,
      count2: preState.count2 + 1
    }));
  };
  resetState = () => {
    this.setState(this.baseState);
  };
  reCount2 = () => {
    this.setState(() => ({
      count2: 0
    }));
  };

  render() {
    const peoplename = 'Kevin';
    function peopletalk() {
      alert('i can do it');
    }
    const peopleinterest = ['讀書', '打球', '遊戲'];
    const peopleproperty = {
      appearance: '帥氣',
      character: '溫和'
    };
    return (
      <View style={styles.container}>
        <Text>HelloWorld</Text>
        <People
          name={peoplename}
          func={peopletalk}
          interest={peopleinterest}
          property={peopleproperty}
        />
        <Text>Count : {this.state.count}</Text>
        <Text>Count2: {this.state.count2}</Text>
        <Button title="ChangeCount" onPress={this.changeCount} />
        <Button title="reCount" onPress={this.resetState} />

        <APSLButton
          style={{ backgroundColor: 'pink' }}
          onPress={this.reCount2}
        >
          <View style={styles.nestedViewStyle}>
            <Text style={{ color: 'red' }}>resetCount2</Text>
          </View>
        </APSLButton>
      </View>
    );
  }
}

class People extends Component {
  render() {
    const { interest, property } = this.props; //ES6寫法跟下面this.porps.name可以做下比較
    return (
      <View>
        <Text>People 名稱 : {this.props.name}</Text>
        <Text onPress={this.props.func} style={styles.say}>
          how can you display?
        </Text>
        <Text>興趣 : {interest[0]}</Text>
        <Text>屬性 : {property.appearance}</Text>
      </View>
    );
  }
}
