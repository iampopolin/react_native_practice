/** @format */

import { AppRegistry } from 'react-native'; //註冊，負責把App註冊到react native應用當中
//import App from './App';
import { name as appName } from './app.json';
import HelloWorld from './HelloWorld';
AppRegistry.registerComponent(appName, () => HelloWorld);
