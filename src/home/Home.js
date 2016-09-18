import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform, Image, Dimensions, TextInput, TouchableHighlight } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Camera from 'react-native-camera';
import * as firebase from 'firebase';
import { takeSnapshot } from "react-native-view-shot";

import {
  Button,
  Text,
  Card,
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

const food = [
  {
    name: 'Eggs',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Bannana',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Orange',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Apple',
    avatar: 'http://lorempixel.com/128/128/food/'
  },
  {
    name: 'Milk',
    avatar: 'http://lorempixel.com/128/128/food/'
  }
]

class Home extends Component {

  constructor(props) {
    super(props);
    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false
    };

  }


  render () {
    const { toggleSideMenu } = this.props
    return (
      <ScrollView
        ref='ScrollView'
        style={{backgroundColor: 'white'}}>


                <View style={styles.container}>
                  <Camera
                    ref={(cam) => {
                      this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Button
                    style={styles.capture}
                      fontFamily='Lato'
                      raised
                      backgroundColor='#FF5722'
                      icon={{name: 'center-focus-weak'}}
                      title='SCAN RECEIPT'
                      onPress={this._takePicture.bind(this)} />
                  </Camera>
                </View> 
      </ScrollView>
    )
  }

   _takePicture() {
      this.camera.capture()
      .then((data) => {
      console.log(data)
      const message = '133506F7-416E-4A12-A8E6-2AB0521919B3';
      // "assets-library://asset/asset.JPG?id=9E387BE1-5408-4CAD-9C9E-92D22F998264&ext=JPG"
      var storageRef = firebase.storage().ref('assets-library://');

      var mountainsRef = storageRef.child('asset.jpg'); 
      var mountainImagesRef = storageRef.child('asset/asset.jpg');
      // var mountainImagesPathRef = storageRef.child('assets-library://asset/asset.jpg');
      
       mountainsRef.name === mountainImagesRef.name         
       mountainsRef.fullPath === mountainImagesRef.fullPath   
      console.log(message);
      storageRef.putString(message, 'base64url').then(function(snapshot) {
        console.log('Uploaded a base64 string!');
      })})
      .catch(err => console.error(err));
  }
}


styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  headerContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.primary2
  },
  titleContainer: {
  },
  // button: {
  //   marginTop: 15
  // },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  preview: {
    flex: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 1000,
    margin: 1000
  },
  buttonText: {
        color: '#000'
  },
  textInput: {
        height: 25,
        width: 160,
        marginBottom: 10,
        backgroundColor: '#ccc',
        alignSelf: 'center',
        borderRadius: 5,
        textAlign: 'center'
    },
    button: {
        borderRadius: 4,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ccc',
        borderColor: '#333',
        borderWidth: 1
    },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default Home
