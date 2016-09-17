import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform, Image, Dimensions } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Camera from 'react-native-camera';
import * as firebase from 'firebase';

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

  // constructor(props) {
  //   super(props, ...arguments);
  //   this.state = {
  //     hidden: false,
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2,
  //     })
  //   };
    
  //   const toggle = () => {
  //       this.setState({
  //           hidden: !this.state.hidden
  //       });
  //   };
  // }


  // componentDidMount() {
  // () => {
  //   firebase.database().ref('items').get({
  //     console.log('got the json');
  //   })
  // }

  //   this.setState({
  //     dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
  //   })

  // }

  render () {
    const { toggleSideMenu } = this.props
    return (
      <ScrollView
        ref='ScrollView'
        style={{backgroundColor: 'white'}}>
        <View style={styles.hero}>
        </View>

          <Card
            title='FRIDGE STARS'>
            {
              food.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode='center'
                      source={{uri: u.avatar}} />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                )
              })
            }
           </Card>

        <Button
          fontFamily='Lato'
          raised
          backgroundColor='#FF5722'
          icon={{name: 'center-focus-weak'}}
          title='SCAN RECEIPT' />

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

      </ScrollView>
    )
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
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
    flex: 1,
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
    padding: 10,
    margin: 40
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
