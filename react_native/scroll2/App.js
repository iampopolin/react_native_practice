/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import VerticalScrollView from './components/VerticalScrollView/index';
import HorizontalScrollView from './components/HorizontalScrollView/index';
export default class App extends Component {
  render() {
    //這邊<HorizontalScrollView /> 可以改成 <VerticalScrollView/>
    return <VerticalScrollView />;
  }
}
