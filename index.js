/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);

export { default as Login } from "./src/screens/Login.js";
export { default as Signup } from "./src/screens/Signup.js";
