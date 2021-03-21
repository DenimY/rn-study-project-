/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import {
  AppRegistry,
  StatusBar
} from 'react-native';
import App from './App';

StatusBar.setBarStyle('light-content', true);
AppRegistry.registerComponent('rnApp', () => App);
