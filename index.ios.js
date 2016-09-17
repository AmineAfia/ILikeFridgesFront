import React from 'react'
import { AppRegistry } from 'react-native'
import AppRootContainer from './src/AppRootContainer'
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAb8M6OlMBfGfg5XgJIkh5i4yO3KP2qu2o",
  authDomain: "ilikefridges-735ac.firebaseapp.com",
  databaseURL: "https://ilikefridges-735ac.firebaseio.com",
  storageBucket: "ilikefridges-735ac.appspot.com",
  messagingSenderId: "843914572032"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const HackathonStarter = () => (
  <AppRootContainer />
)

AppRegistry.registerComponent('HackathonStarter', () => HackathonStarter)
