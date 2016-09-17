import React, { Component, PropTypes } from 'react'
import { View, Easing, StyleSheet, Animated, Dimensions } from 'react-native'

let styles
class CameraComponent extends Component {

  render () {
                <View style={styles.container}>
                  <Camera
                    ref={(cam) => {
                      this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                  </Camera>
                </View>
    }
}

export default SideMenu
